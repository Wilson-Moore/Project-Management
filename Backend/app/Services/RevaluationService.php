<?php

namespace App\Services;

use App\Models\Revaluation;

class RevaluationService extends BaseService
{
    public function __construct(Revaluation $revaluation)
    {
        $this->model=$revaluation;
    }
}