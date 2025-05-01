<?php

namespace App\Services;

use App\Models\Program;

class ProgramService extends BaseService
{
    public function __construct(Program $program)
    {
        $this->model=$program;
    }
}