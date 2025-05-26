<?php

namespace App\Services;

use App\Models\Materialmean;

class MaterialmeanService extends BaseService
{
    public function __construct(Materialmean $materialmean)
    {
        $this->model=$materialmean;
    }
}