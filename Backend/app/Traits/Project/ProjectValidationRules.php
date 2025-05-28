<?php

namespace App\Traits\Project;

use App\Rules\DurationRule;
use App\Rules\Project\ProjectCostRule;
use App\Services\OperationService;

trait ProjectValidationRules
{    
    protected function base_rules(OperationService $operation_service): array
    {
        return [
            'objectif'=>['required'],
            'cost'=>[
                'required','integer',
                new ProjectCostRule($this->operation_number,$operation_service)
            ],
            'duration'=>['required',new DurationRule()],
            'operation_number'=>['required','exists:operations,number'],
            'co_contractor'=>['sometimes','exists:partners,nif'],
        ];
    }

    protected function update_rules(OperationService $operation_service): array
    {
        $rules=$this->base_rules($operation_service);
        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }
        return $rules;
    }
}
