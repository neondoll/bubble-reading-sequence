<?php

namespace App\Helpers\Classes\ObjectMutators;

use App\Helpers\Interfaces\ObjectEventMutatorContract;
use App\Helpers\Interfaces\ObjectModelInterface;
use App\Models\ObjectEvent;
use DB;
use Exception;
use Illuminate\Support\Facades\Validator;

class ObjectEventMutator implements ObjectEventMutatorContract
{
    private int $objectId;

    public function update(ObjectModelInterface $model, $fieldsToUpdate): bool
    {
        $this->objectId = $model->id;

        try {
            DB::transaction(function () use ($fieldsToUpdate) {
                $this->setRepairType($fieldsToUpdate['repairType']);
                $this->setSurvey($fieldsToUpdate['survey']);
                $this->setPsd($fieldsToUpdate['psd']);
                $this->setGge($fieldsToUpdate['gge']);
                $this->setSmr($fieldsToUpdate['smr']);
            });
        } catch (Exception $exception) {
            return false;
        }

        return true;
    }

    private function setRepairType(array $fields)
    {
        return ObjectEvent::updateOrCreate(
            ['obj_id' => $this->objectId, 'stage' => 1],
            ['type_id' => $fields['type_event']['id'], 'p07' => $fields['short_description']]
        );
    }

    private function setSurvey(array $fields)
    {
        return ObjectEvent::updateOrCreate(
            ['obj_id' => $this->objectId, 'stage' => 2],
            [
                'type_id' => $fields['technical_survey']['id'],
                'p02' => $fields['start'],
                'p03' => $fields['end'],
                'p05' => $fields['budjet'],
                'p06' => $fields['cost']
            ]
        );
    }

    private function setPsd(array $fields)
    {
        return ObjectEvent::updateOrCreate(
            ['obj_id' => $this->objectId, 'stage' => 3],
            [
                'type_id' => $fields['documentation']['id'],
                'p02' => $fields['start'],
                'p03' => $fields['end'],
                'p05' => $fields['budjet'],
                'p06' => $fields['not_budjet'],
                'references' => $fields['references']
            ]
        );
    }

    private function setGge(array $fields)
    {
        return ObjectEvent::updateOrCreate(
            ['obj_id' => $this->objectId, 'stage' => 4],
            [
                'type_id' => $fields['conclusion']['id'],
                'p02' => $fields['start'],
                'p03' => $fields['end'],
                'p05' => $fields['budjet'],
                'p06' => $fields['not_budjet'],
            ]
        );
    }

    private function setSmr(array $fields)
    {
        return ObjectEvent::updateOrCreate(
            ['obj_id' => $this->objectId, 'stage' => 5],
            [
                'p02' => $fields['start'],
                'p03' => $fields['end'],
                'p05' => $fields['budjet'],
                'p06' => $fields['not_budjet'],
                'p07' => $fields['short_description'],
                'references' => $fields['references']
            ]
        );
    }
}
