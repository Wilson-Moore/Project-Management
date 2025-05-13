<?php

namespace App\Traits\Consultation;

use App\Rules\DurationRule;

trait ConsultationValidationRules
{    
    protected function base_rules(): array
    {
        return [
            'signature_date'=>['required','date'],
            'duration'=>['required',new DurationRule()],
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
