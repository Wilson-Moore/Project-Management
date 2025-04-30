<?php

namespace App\Services;

use App\Models\Wallet;

class WalletService
{
    public function create_resource(array $data): Wallet
    {
        return Wallet::create($data);
    }

    public function update_resource(Wallet $wallet, array $data): Wallet
    {
        $wallet->update($data);
        return $wallet->refresh();
    }

    public function delete_resource(Wallet $wallet): void
    {
        $wallet->delete();
    }
}