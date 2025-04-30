<?php

namespace App\Traits\Operation;

use App\Rules\Operation\OperationNumberRule;

trait OperationValidationRules
{
    protected function base_rules(): array
    {
        return [
            'number'=>[
                'required','regex:/^[NS][0-9][A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}[0-9]{2}[A-Z0-9]{3}$/',
                new OperationNumberRule($this)],
            'title'=>['required'],
            'date_of_notification'=>['required','date'],
            'current_ap'=>['required','integer'],
            'initial_ap'=>['required','integer'],
            'action'=>['required','exists:actions,code'],
        ];
    }
}
