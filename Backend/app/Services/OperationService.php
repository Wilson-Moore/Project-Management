<?php

namespace App\Services;

use App\Models\Operation;

class OperationService extends BaseService
{
    public function __construct()
    {
        $this->model=new Operation();
    }
}