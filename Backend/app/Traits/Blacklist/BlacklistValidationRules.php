<?php

namespace App\Traits\Blacklist;

trait BlacklistValidationRules
{    
    protected function base_rules(): array
    {
        return [
            'entry_date'=>['required','date'],
            'exit_date'=>['required','date','after:entry_date'],
            'reason'=>['required','string'],
            'observation'=>['sometimes','nullable'],
            'partner_nif'=>['required','exists:partners,nif'],
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
