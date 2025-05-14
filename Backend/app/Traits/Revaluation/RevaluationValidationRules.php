<?php

namespace App\Traits\Revaluation;

trait RevaluationValidationRules
{
    protected function base_rules(): array
    {
        return [
            'year'=>['required','integer','between:1900,'.date('Y')],
            'amount'=>['required','integer'],
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
