<?php

namespace App\Traits\Action;

use App\Rules\Action\ActionCodeRule;
use App\Rules\Action\ActionMatchRule;

trait ActionValidationRules
{
    protected function base_rules(): array
    {
        return [
            'code'=>['required','size:18',new ActionCodeRule($this->code)],
            'title'=>['required'],
            'subprogram_id'=>[
                'required','exists:subprograms,id',
                new ActionMatchRule($this->subprogram_id,substr($this->code,6,2))
            ],
        ];
    }

    protected function type(): int
    {
        $type=0;
        if (preg_match('/^[A-Z0-9]{8}(\d{4})/',$this->code,$matches)) {
            $type=(int)substr($matches[1],0,1);
        }
        if ($type===1||$type===2) {
            return $type;
        } else {
            return $type=3;
        }
    }
}
