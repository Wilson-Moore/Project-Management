<?php

namespace App\Traits\Blacklist;

trait MaterialmeanValidationRules
{    
    protected function base_rules(): array
    {
        return [
            'number'=>['required','string'],
            'type'=>['required','string',],
            'registration'=>['required','string'],
            'employer'=>['required','exists:partners,nif'],
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
