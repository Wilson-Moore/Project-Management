<?php

namespace App\Services;

use App\Models\Action;

class ActionService extends BaseService
{
    public function __construct()
    {
        $this->model=new Action();
    }
}