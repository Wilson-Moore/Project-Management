<?php

namespace App\Traits\Wallet;

trait WalletValidationRules
<<<<<<< HEAD
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3'],
            'title'=>['required'],
        ];
    }
=======
{    
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3','unique:wallets,code'],
            'title'=>['required'],
        ];
    }

    protected function update_rules(): array
    {
        $rules=$this->base_rules();
        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }
        return $rules;
    }
>>>>>>> master
}
