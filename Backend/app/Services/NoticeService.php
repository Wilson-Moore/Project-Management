<?php

namespace App\Services;

use App\Models\Notice;

class NoticeService extends BaseService
{
    public function __construct(Notice $notice)
    {
        $this->model=$notice;
    }
}