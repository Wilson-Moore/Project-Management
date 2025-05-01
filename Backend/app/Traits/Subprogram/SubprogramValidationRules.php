<?php

namespace App\Traits\Subprogram;

trait SubprogramValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','alpha_num','size:2'],
            'title'=>['required'],
            'program_code'=>['required','exists:programs,code'],
        ];
    }
}
