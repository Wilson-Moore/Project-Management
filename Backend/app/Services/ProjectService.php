<?php

namespace App\Services;

use App\Models\Project;

class ProjectService extends BaseService
{
    public function __construct()
    {
        $this->model=new Project();
    }
}