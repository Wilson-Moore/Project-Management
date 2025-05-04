<?php

namespace App\Traits\Wallet;

trait WalletValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3'],
            'title'=>['required'],
        ];
    }
}
