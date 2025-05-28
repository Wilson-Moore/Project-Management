<?php

namespace App\Traits\Humanmean;

trait HumanmeanValidationRules
{    
    protected function base_rules(): array
    {
        return [
            'cnas'=>['required','string'],
            'family_name'=>['required','string'],
            'name'=>['required','string'],
            'employer'=>['required','exists:partners,nif'],
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
