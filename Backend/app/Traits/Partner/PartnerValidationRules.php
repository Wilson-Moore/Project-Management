<?php

namespace App\Traits\Partner;

trait PartnerValidationRules
{
    protected function base_rules(): array
    {
        return [
            'nif'=>['required','string'],
            'company_name'=>['required','string'],
            'address'=>['required','string'],
            'mobile1'=>['sometimes','nullable','string','unique:partners,moblie1'],
            'mobile2'=>['sometimes','nullable','string','unique:partners,moblie2'],
            'phone'=>['sometimes','string','unique:partners,phone'],
            'email'=>['sometimes','string','email','unique:partners,email'],
            'status'=>['sometimes','integer'],
            'city'=>['sometimes','string'],
            'fax'=>['sometimes','string','unique:partners,fax'],
            'domain'=>['sometimes','integer'],
            'category'=>['sometimes','integer'],
            'micro'=>['sometimes','boolean'],
            'trade_register'=>['required','string','unique:partners,trade_register'],
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
}
