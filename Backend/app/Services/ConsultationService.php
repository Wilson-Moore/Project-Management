<?php

namespace App\Services;

use App\Models\Consultation;

class ConsultationService extends BaseService
{
    public function __construct()
    {
        $this->model=new Consultation();
    }
}