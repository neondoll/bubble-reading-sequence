<?php

namespace App\Helpers\Classes;

use App\Helpers\Classes\Statuses\DepStatus as StatusesDepStatus;
use App\Helpers\Classes\Statuses\MgsuStatus;
use App\Helpers\Interfaces\ObjectConstructorContract;
use App\Helpers\Interfaces\ObjectDocumentMutatorContract;
use App\Helpers\Interfaces\ObjectEventMutatorContract;
use App\Helpers\Interfaces\ObjectModelInterface;
use App\Helpers\Interfaces\ObjectMutatorContract;
use App\Helpers\Interfaces\ObjectStatusMutatorContract;
use App\Models\DepStatus;
use App\Models\ObjStatus;
use App\Models\ProgramObject;
use Auth;
use Exception;
use Illuminate\Http\UploadedFile;

class ObjectService
{
    private ObjectModelInterface $object;

    //TODO:в идеале чтобы ProgramObject передавался в конструкторе
    public function __construct(
        public ObjectConstructorContract $objectConstructor,
        public ObjectMutatorContract $objectMutator,
        public ObjectEventMutatorContract $objectEventMutator,
        public ObjectStatusMutatorContract $objectStatusMutator,
        public ObjectDocumentMutatorContract $objectDocumentMutator,
        private ?int $object_id = null,
        private ?array $userRoles = null
    ) {
        if ($object_id)
            $this->object = ProgramObject::findOrFail($object_id);
        else $this->object = new ProgramObject();
    }

    public function create(array $fromFields): ObjectModelInterface
    {
        return $this->objectMutator->create($this->object, $fromFields);
    }

    public function update(array $filedsToUpdate): bool
    {
        return $this->objectMutator->update($this->object, $filedsToUpdate);
    }

    public function delete(int $object_id): bool
    {
        return $this->objectMutator->delete($this->object, $object_id);
    }

    public static function createObject(array $fromFields): ObjectModelInterface
    {
        $service = app(self::class);

        return $service->create($fromFields);
    }

    public static function updateObject(int $object_id, array $fieldsToUpdate)
    {
        $service = app(self::class, ['object_id' => $object_id]);

        return $service->update($fieldsToUpdate);
    }

    public function updateDepStatus(int $statusId): bool
    {
        $this->validateStatusChange($statusId, $this->object::getDepStatusClass());

        return $this->objectStatusMutator->updateDepStatus($this->object, $statusId);
    }

    public function updateMgsuStatus(int $statusId): bool
    {
        $this->validateStatusChange($statusId, $this->object::getMgsuStatusClass());

        return $this->objectStatusMutator->updateMgsuStatus($this->object, $statusId);
    }

    //TODO: выпелить этот класс отсюда нафиг
    public function instantinateObject(int $objectId)
    {
        return ProgramObject::findOrFail($objectId);
    }

    //Это ошибка, сюда не должно передаваться this->object
    public function get(int $objectId, array $with = null)
    {
        return $this->objectConstructor->construct($this->object, $objectId, $with ?? []);
    }

    public function updateObjectEvents(int $objectId, array $fieldsToUpdate): bool
    {
        $object = $this->instantinateObject($objectId);
        return $this->objectEventMutator->update($object, $fieldsToUpdate);
    }

    public function saveDocumentFile(int $objectId, array $data, UploadedFile $file): array
    {
        $object = $this->instantinateObject($objectId);

        return $this->objectDocumentMutator->saveDocumentFile($object, $data, $file);
    }

    //Неправильно конечно но пусть пока так
    public function approve(int $objectId): bool
    {
        $object = $this->instantinateObject($objectId);
        $object->status->is_approved_by_user = true;

        return $object->status->save();
    }

    public function sendToRealization(int $objectId): bool
    {
        $object = $this->instantinateObject($objectId);

        if ($object->type === 0) {
            if (
                !$object->status->is_approved_by_user ||
                $object->status->mgsu_status_id != MgsuStatus::RECOMMENDED_FOR_APPROVAL ||
                $object->status->dep_status_id != StatusesDepStatus::CONSIDERED_DBI
            )
                throw new Exception('Неверные условия для реализации');
        } else {
            if (
                !$object->status->is_approved_by_user ||
                $object->status->mgsu_status_id != MgsuStatus::RECOMMENDED_FOR_APPROVAL
            )
                throw new Exception('Неверные условия для реализации');
        }


        $object->status->to_realization = true;
        return $object->status->save();
    }

    //Это должно быть не здесь а где-то в StatusRuleValidator
    private function validateStatusChange(int $status_id, string $statusModelClass)
    {
        if (!$this->object)
            throw new Exception('Trying to change status on null');

        $statusModelClass::findOrFail($status_id);
    }
}
