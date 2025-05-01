<?php

namespace App\Traits\Project;

use App\Rules\DurationRule;

trait ProjectValidationRules
{
    protected function base_rules(): array
    {
        return [
            'objectif'=>['required'],
            'cost'=>['required','integer'],
            'start_date'=>['required','date'],
            'duration'=>['required',new DurationRule($this)],
            'assessment_date'=>['required','date'],
            'operation_number'=>['required','exists:operations,number'],
        ];
    }
}
