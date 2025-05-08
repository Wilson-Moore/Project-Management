<?php

namespace App\Traits\Notice;

trait NoticeValidationRules
{
    protected function base_rules(): array
    {
        return [
            'arab_publication_date'=>['sometimes','nullable','date'],
            'french_publication_date'=>['sometimes','nullable','date'],
            'BOMOP_date'=>['sometimes','nullable','date'],
            'observation'=>['sometimes','nullable'],
            'operation_number'=>['required','exists:operations,number'],
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
