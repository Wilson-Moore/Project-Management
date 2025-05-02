<?php

namespace App\Traits\Action;

use App\Rules\Action\ActionCodeRule;
use App\Rules\Action\ActionMatchRule;
use App\Services\ProgramService;
use App\Services\SubprogramService;
use App\Services\WalletService;

trait ActionValidationRules
{
    protected function base_rules(
        WalletService $wallet_service, 
        ProgramService $program_service, 
        SubprogramService $subprogram_service
    ): array
    {
        return [
            'code'=>['required','size:18',new ActionCodeRule($wallet_service,$program_service)],
            'title'=>['required'],
            'subprogram_id'=>[
                'required','exists:subprograms,id',
                new ActionMatchRule(substr($this->code,6,2),$subprogram_service)
            ],
        ];
    }

    protected function type(): int
    {
        if (preg_match('/^[A-Z0-9]{8}(\d{4})/',$this->code,$matches)) {
            $type=(int)substr($matches[1],0,1);
        }
        return in_array($type,[1,2]) ? $type:3;
    }
}
