<?php

namespace App\Services;

use App\Models\Blacklist;

class BlacklistService extends BaseService
{
    public function __construct(Blacklist $blacklist)
    {
        $this->model=$blacklist;
    }
}