<?php

namespace App\Services;

use App\Models\Operation;

class OperationService extends BaseService
{
    public function __construct(Operation $operation)
    {
        $this->model=$operation;
    }

    public function has_projects(Operation $operation): bool
    {
        return $operation->projects->isEmpty();
    }

    public function can_add_project(Operation $operation, int $value): bool
    {
        return ($operation->projects()->sum('cost')+$value)<=$operation->current_ap;
    }
}