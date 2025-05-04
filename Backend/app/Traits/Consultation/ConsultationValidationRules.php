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
            'observation'=>['required'],
            'operation_number'=>['required','exists:operations,number'],
        ];
    }
}
