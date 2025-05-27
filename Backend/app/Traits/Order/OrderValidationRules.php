<?php

namespace App\Traits\Order;

trait OrderValidationRules
{
    protected function base_rules(): array
    {
        return [
            'register_number'=>['required','unique:orders,register_number'],
            'number'=>['required','integer'],
            'signature_date'=>['required','date'],
            'notification_date'=>['required','date','after_or_equal:signature_date'],
            'type'=>['required','integer'],
            'project_id'=>['required','exists:projects,id'],
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
