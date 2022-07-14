<?php

namespace App\Helpers\Classes;

use App\Helpers\Classes\Statuses\DepStatus;
use App\Helpers\Classes\Statuses\MgsuStatus;
use App\Helpers\Interfaces\ObjectModelInterface;

class ObjectPermissionsResolver
{
    public function __construct(
        public ObjectModelInterface $model
    ) {
    }

    public function canUpdateRepairType(): bool
    {
        return $this->model->status->dep_status?->id != DepStatus::CONSIDERED_DBI;
    }

    public function canApproveObject(): bool
    {
        return !$this->model->status->is_approved_by_user;
    }

    public function canUpdateGeneralInfo(): bool
    {
        if ($this->model->status->mgsu_status_id == MgsuStatus::NOT_RECOMMENDED_FOR_APPROVAL)
            return false;

        if (
            $this->model->status->mgsu_status_id == MgsuStatus::RECOMMENDED_FOR_APPROVAL &&
            $this->model->status->dep_status_id == DepStatus::CONSIDERED_DBI
        )
            return false;

        return true;
    }

    public function canDeleteObject(): bool
    {
        return !($this->model->status->mgsu_status_id == MgsuStatus::NOT_RECOMMENDED_FOR_APPROVAL ||
            $this->model->status->dep_status_id == DepStatus::CONSIDERED_DBI
        );
    }

    public function canUserSendObjectToRealization(): bool
    {
        $defaults = $this->model->status->mgsu_status_id == MgsuStatus::RECOMMENDED_FOR_APPROVAL &&
            $this->model->status->is_approved_by_user === true &&
            $this->model->status->to_realization !== true;

        if ($this->model->type === 0)
            return $defaults && $this->model->status->dep_status_id == DepStatus::CONSIDERED_DBI;

        return $defaults;
    }

    public function showWarning(): bool
    {
        return
            !$this->model->program->isSent() &&
            $this->model->status->is_approved_by_user &&
            !$this->model->status->to_realization;
    }
}
