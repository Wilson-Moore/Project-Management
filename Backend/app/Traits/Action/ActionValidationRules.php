<?php

namespace App\Traits\Action;

use App\Rules\Action\ActionCodeRule;
use Illuminate\Validation\Rule;

trait ActionValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>[
                'sometimes','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/',
                'size:18',new ActionCodeRule($this)],
            'type'=>['sometimes','required',Rule::in(1,2,3)],
            'title'=>['sometimes','required'],
            'subprogram'=>['sometimes','required','exists:subprograms,id'],
        ];
    }
}
