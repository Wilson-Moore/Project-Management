<?php

namespace App\Services;

use App\Models\Humanmean;

class HumanmeanService extends BaseService
{
    public function __construct(Humanmean $humanmean)
    {
        $this->model=$humanmean;
    }
}