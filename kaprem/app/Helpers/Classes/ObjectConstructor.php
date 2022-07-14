<?php

namespace App\Helpers\Classes;

use App\Helpers\Classes\Statuses\DepStatus;
use App\Helpers\Classes\Statuses\MgsuStatus;
use App\Helpers\Interfaces\ObjectConstructorContract;
use App\Helpers\Interfaces\ObjectModelInterface;
use App\Models\ObjectEvent;
use Exception;
use Illuminate\Database\Eloquent\RelationNotFoundException;

class ObjectConstructor implements ObjectConstructorContract
{
    private int $objectId;

    private ObjectModelInterface $model;

    private ObjectModelInterface $instantinatedObject;

    public function construct(ObjectModelInterface $model, int $objectId, array $with = [])
    {
        $this->model = $model;
        $this->objectId = $objectId;
        $this->instantinatedObject = $this->model->where('id', $objectId)->with('status')->first();

        $object = $model
            ->where($model->getKeyName(), $objectId)
            ->with('status', function ($query) {
                $query->with(['mgsu_status', 'dep_status']);
            });

        [$resolvedDependensies, $others] = $this->resolveDependensies($with);
        $computedStatus = $this->resolveComputedStatus();
        $object->with($others);

        try {
            $objectData = $object->first();
        } catch (RelationNotFoundException $e) {
            throw new Exception("Поле {$e->relation} не найдено ни в методах resolve ни в реляциях модели");
        }

        return array_merge(
            $objectData->toArray(),
            ['totalFin' => $objectData->finance_sum, 'totalCoFin' => $objectData->co_finance],
            ['objectPermissions' => $this->getObjectPermissions(new ObjectPermissionsResolver($this->instantinatedObject))],
            $resolvedDependensies,
            ['computedStatus' => $computedStatus],
            ['mon_status_label' => $this->getCoumputedStatusLabel($computedStatus)]
        );
    }

    public function resolveDependensies(array $with = []): array
    {
        $resolvedDependensies = [];
        foreach ($with as $withDependensy) {
            $methodName = 'resolve' . ucfirst($withDependensy);
            if (method_exists(self::class, $methodName)) {
                unset($with[array_search($withDependensy, $with)]);
                $resolvedDependensies[$withDependensy] = $this->$methodName();
            }
        }

        return [$resolvedDependensies, $with];
    }

    private function resolveEvents()
    {
        $repairType = ObjectEvent::where('obj_id', $this->objectId)->where('stage', 1)->first();
        $survey = ObjectEvent::where('obj_id', $this->objectId)->where('stage', 2)->first();
        $psd = ObjectEvent::where('obj_id', $this->objectId)->where('stage', 3)->first();
        $gge = ObjectEvent::where('obj_id', $this->objectId)->where('stage', 4)->first();
        $smr = ObjectEvent::where('obj_id', $this->objectId)->where('stage', 5)->first();

        return [
            'repairType' => [
                'type_event' => $repairType?->type?->toArray() ?? ['id' => null],
                'short_description' => $repairType?->p07,
            ],
            'survey' => [
                'technical_survey' => $survey?->type?->toArray() ?? ['id' => null],
                'start' => $survey?->p02,
                'end' => $survey?->p03,
                'budjet' => $survey?->p05,
                'cost' => $survey?->p06
            ],
            'psd' => [
                'documentation' => $psd?->type?->toArray() ?? ['id' => null],
                'start' => $psd?->p02,
                'end' => $psd?->p03,
                'budjet' => $psd?->p05,
                'not_budjet' => $psd?->p06,
                'references' => $psd?->references ?? [6 => null, 7 => null]
            ],
            'gge' => [
                'conclusion' => $gge?->type?->toArray() ?? ['id' => null],
                'start' => $gge?->p02,
                'end' => $gge?->p03,
                'budjet' => $gge?->p05,
                'not_budjet' => $gge?->p06
            ],
            'smr' => [
                'start' => $smr?->p02,
                'end' => $smr?->p03,
                'budjet' => $smr?->p05,
                'not_budjet' => $smr?->p06,
                'short_description' => $smr?->p07,
                'references' => $smr?->references ?? [16 => null, 17 => null]
            ]
        ];
    }

    private function resolveComputedStatus()
    {
        $objectProgram = $this->instantinatedObject->program;
        $objectStatus = $this->instantinatedObject->status;

        //DRY полностью задействован, извините, 8 вечера, а мне еще домой пешком...
        if ($this->instantinatedObject->type === 0) {
            if (
                $objectStatus->to_realization &&
                $objectStatus->dep_status_id == DepStatus::CONSIDERED_DBI &&
                $objectStatus->mgsu_status_id == MgsuStatus::RECOMMENDED_FOR_APPROVAL
            ) {
                return ['label' => 'в реализации', 'value' => 'IN_IMPLEMENTATION'];
            } else if (
                $objectProgram->isSent() && $objectStatus->is_approved_by_user !== false
            ) {
                return ['label' => 'в обработке', 'value' => 'IN_PROCESSING'];
            }

            return ['label' => 'черновик', 'value' => 'DRAFT'];
        } else if ($this->instantinatedObject->type === 1) {
            if (
                $objectStatus->to_realization &&
                $objectStatus->mgsu_status_id == MgsuStatus::RECOMMENDED_FOR_APPROVAL
            ) {
                return ['label' => 'в реализации', 'value' => 'IN_IMPLEMENTATION'];
            } else if (
                $objectProgram->isSent() && $objectStatus->is_approved_by_user !== false
            ) {
                return ['label' => 'в обработке', 'value' => 'IN_PROCESSING'];
            }

            return ['label' => 'черновик', 'value' => 'DRAFT'];
        }
    }


    private function getCoumputedStatusLabel($computedStatus)
    {
        $objectStatus = $this->instantinatedObject->status;
        if ($computedStatus['value'] === 'IN_PROCESSING' && $objectStatus->mgsu_status_id === null) {
            return $computedStatus['label'];
        } else if ($computedStatus['value'] === 'IN_IMPLEMENTATION') {
            return $computedStatus['label'];
        } else if ($computedStatus['value'] === 'DRAFT') {
            return $objectStatus->mgsu_status?->value;
        } else if ($computedStatus['value'] === 'IN_PROCESSING' && $objectStatus->mgsu_status_id == MgsuStatus::RETURNED_FOR_REPAIR) {
            return $computedStatus['label'];
        } else {
            return $objectStatus->mgsu_status?->value;
        }
    }

    private function resolveFileList()
    {
        return $this->instantinatedObject?->getBuildedFileList();
    }

    private function resolveActionPlanFiles()
    {
        $buildedList = $this->instantinatedObject?->getBuildedActionPlanFileList();

        return $buildedList;
    }

    private function getObjectPermissions(ObjectPermissionsResolver $resolver)
    {
        return [
            'user' => [
                'canUpdateGeneral' => true,
                'canUpdateDepStatus' => false,
                'canUpdateMgsuStatus' => false,
                'canUpdateOther' => true
            ],
            'mgsu' => [
                'canUpdateGeneral' => false,
                'canUpdateDepStatus' => false,
                'canUpdateMgsuStatus' => true,
                'canUpdateOther' => false
            ],
            'mon' => [
                'canUpdateGeneral' => false,
                'canUpdateDepStatus' => true,
                'canUpdateMgsuStatus' => false,
                'canUpdateOther' => true
            ],
            'others' => [
                'canUpdateRepairType' => $resolver->canUpdateRepairType(),
                'canUserApproveObject' => $resolver->canApproveObject(),
                'canUpdateGeneralInfo' => $resolver->canUpdateGeneralInfo(),
                'canDeleteObject' => $resolver->canDeleteObject(),
                'canUserSendObjectToRealization' => $resolver->canUserSendObjectToRealization(),
            ],
            'warnings' => [
                'showWarning' => $resolver->showWarning() //сделать по-другому
            ]
        ];
    }
}
