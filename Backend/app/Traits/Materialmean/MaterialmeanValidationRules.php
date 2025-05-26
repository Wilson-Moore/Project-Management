<?php

namespace App\Traits\Materialmean;

trait MaterialmeanValidationRules
{    
    protected function base_rules(): array
    {
        return [
            'number'=>['required','string'],
            'type'=>['required','string',],
            'registration'=>['required','string'],
            'owner'=>['required','exists:partners,nif'],
            'project_id'=>['sometimes','exists:projects,id'],
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
