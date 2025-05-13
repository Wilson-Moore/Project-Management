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
            'mobile1'=>['sometimes','nullable','string','unique'],
            'mobile2'=>['sometimes','nullable','string','unique'],
            'phone'=>['required','string','unique'],
            'email'=>['required','string','email','unique'],
            'status'=>['required','integer'],
            'city'=>['required','string'],
            'fax'=>['required','string','unique'],
            'domain'=>['required','integer'],
            'category'=>['required','integer'],
            'micro'=>['required','boolean'],
            'trade_register'=>['required','string','unique'],
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
