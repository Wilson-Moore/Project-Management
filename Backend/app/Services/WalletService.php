<?php

namespace App\Services;

use App\Models\Wallet;

class WalletService extends BaseService
{
    public function __construct(Wallet $wallet)
    {
        $this->model=$wallet;
    }
}