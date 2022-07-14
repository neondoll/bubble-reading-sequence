<?php

namespace App\Helpers\Interfaces;

interface ObjectMutatorContract
{
    public function create(ObjectModelInterface $model, array $fromFields): ObjectModelInterface;

    public function update(ObjectModelInterface $model, array $fieldsToUpdate): bool;

    public function delete(ObjectModelInterface $model, int $object_id): bool;
}
