<?php

namespace App\Helpers\Classes\ObjectMutators;

use App\Helpers\Interfaces\ObjectModelInterface;
use App\Helpers\Interfaces\ObjectStatusMutatorContract;

class ObjectStatusMutator implements ObjectStatusMutatorContract
{
    public function updateDepStatus(ObjectModelInterface $model, int $statusId): bool
    {
        $status = $model->status();

        return $status->update(['dep_status_id' => $statusId]);
    }

    public function updateMgsuStatus(ObjectModelInterface $model, int $statusId): bool
    {
        $status = $model->status();

        return $status->update(['mgsu_status_id' => $statusId]);
    }
}