<?php

namespace App\Traits\Program;

trait ProgramValidationRules
<<<<<<< HEAD
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3'],
=======
{  
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:3','unique:programs,code'],
>>>>>>> master
            'title'=>['required'],
            'wallet_code'=>['required','exists:wallets,code'],
        ];
    }
<<<<<<< HEAD
=======

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
