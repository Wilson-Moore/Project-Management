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
            'initial_ap'=>['required','integer'],
            'current_ap'=>['sometimes','nullable','integer'],
            'revaluation'=>['sometimes','nuallable','integer'],
            'situation'=>['required','integer'],
            'observation'=>['sometimes','nullable'],
            'individualized'=>['nullable','boolean'],
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
