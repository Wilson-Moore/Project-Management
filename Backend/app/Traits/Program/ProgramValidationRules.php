<?php

namespace App\Traits\Program;

trait ProgramValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3','unique:programs,code'],
            'title'=>['required'],
            'wallet_code'=>['required','exists:wallets,code'],
        ];
    }
}
