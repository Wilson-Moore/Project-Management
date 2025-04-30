<?php

namespace App\Services;

use App\Models\Program;

class ProgramService extends BaseService
{
    public function __construct()
    {
        $this->model=new Program();
    }
}