<?php

namespace App\Traits\Project;

use App\Rules\DurationRule;
use App\Rules\Project\ProjectCostRule;
use App\Services\OperationService;

trait ProjectValidationRules
<<<<<<< HEAD
{
=======
{    
>>>>>>> master
    protected function base_rules(OperationService $operation_service): array
    {
        return [
            'objectif'=>['required'],
            'cost'=>[
                'required','integer',
                new ProjectCostRule($this->operation_number,$operation_service)
            ],
            'start_date'=>['required','date'],
            'duration'=>['required',new DurationRule()],
            'assessment_date'=>['required','date','after_or_equal:start_date'],
            'operation_number'=>['required','exists:operations,number'],
        ];
    }
<<<<<<< HEAD
=======

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
>>>>>>> master
}
