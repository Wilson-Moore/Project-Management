<?php

namespace App\Traits\Subprogram;

use App\Rules\Subprogram\SubprogramUniqueRule;
use App\Services\SubprogramService;

trait SubprogramValidationRules
{
    protected function base_rules(SubprogramService $subprogram_service): array
    {
        return [
            'code'=>[
                'required','alpha_num','size:2',
                new SubprogramUniqueRule($this->program_code,$subprogram_service)
            ],
            'title'=>['required'],
            'program_code'=>['required','exists:programs,code'],
        ];
    }
}
