<?php

namespace App\Services;

use App\Models\Order;

class OrderService extends BaseService
{
    public function __construct(Order $order)
    {
        $this->model=$order;
    }
}
