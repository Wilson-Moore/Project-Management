<?php

namespace App\Services;

use App\Models\Operation;

class OperationService extends BaseService
{
    public function __construct(Operation $operation)
    {
        $this->model=$operation;
    }
}