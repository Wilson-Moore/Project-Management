<?php

namespace App\Traits\Operation;

use App\Rules\Operation\OperationNumberRule;
use App\Services\ActionService;

trait OperationValidationRules
{   
    protected function base_rules(ActionService $action_service): array
    {
        return [
            'number'=>['required','unique:operations,number',new OperationNumberRule($this->number,$this->date_of_notification,$action_service)],
            'title'=>['required'],
            'date_of_notification'=>['required','date'],
            'current_ap'=>['required','integer'],
            'initial_ap'=>['required','integer'],
            'situation'=>['required','integer'],
            'action_code'=>['required','exists:actions,code'],
        ];
    }

    protected function update_rules(ActionService $action_service): array
    {
        $rules=$this->base_rules($action_service);
        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }
        return $rules;
    }
}
