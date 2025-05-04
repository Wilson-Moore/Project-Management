<?php

namespace App\Services;

use App\Models\Subprogram;

class SubprogramService extends BaseService
{
    public function __construct(Subprogram $subprogram)
    {
        $this->model=$subprogram;
    }
}