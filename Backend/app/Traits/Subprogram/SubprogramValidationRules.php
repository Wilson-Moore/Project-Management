<?php

namespace App\Traits\Subprogram;

trait SubprogramValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:2'],
            'title'=>['required'],
            'program'=>['required','exists:programs,code'],
        ];
    }
}
