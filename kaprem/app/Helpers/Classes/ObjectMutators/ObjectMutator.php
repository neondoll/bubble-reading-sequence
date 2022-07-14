<?php

namespace App\Helpers\Classes\ObjectMutators;

use App\Helpers\Interfaces\ObjectModelInterface;
use App\Helpers\Interfaces\ObjectMutatorContract;

class ObjectMutator implements ObjectMutatorContract
{
    public function create(ObjectModelInterface $model, array $fromFields): ObjectModelInterface
    {
        $newObject = $model->create($fromFields);
        $newObject->attachDefaultStatusWhenCreated();

        return $newObject;
    }

    public function update(ObjectModelInterface $model, array $fieldsToUpdate): bool
    {
        $isObjectUpdated = $model->update($fieldsToUpdate);

        return $isObjectUpdated;
    }

    public function delete(ObjectModelInterface $model, int $object_id): bool
    {
        $isObjectDeleted = $model->destroy($object_id);

        return $isObjectDeleted;
    }
}
