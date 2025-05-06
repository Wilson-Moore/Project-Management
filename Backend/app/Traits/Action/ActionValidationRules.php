<?php

namespace App\Traits\Action;

use App\Rules\Action\ActionCodeRule;
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
            'code'=>['required','size:18','unique:actions,code'
            ,new ActionCodeRule($wallet_service,$program_service,$subprogram_service)],
            'title'=>['required'],
        ];
    }

    protected function update_rules(
        WalletService $wallet_service, 
        ProgramService $program_service, 
        SubprogramService $subprogram_service
    ): array
    {
        $rules=$this->base_rules($wallet_service,$program_service,$subprogram_service);
        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }
        return $rules;
    }

    protected function type(): int
    {
        preg_match('/^[A-Z0-9]{8}(\d{4})/',$this->code,$matches) ? $type=(int)substr($matches[1],0,1) : $type=0;
        return in_array($type,[1,2]) ? $type:3;
    }

    protected function id(): int
    {
        return preg_match('/^[A-Z0-9]{3}([A-Z0-9]{3})([A-Z0-9]{2})/',$this->code,$matches) ?
        $this->subprogram_service->find(['program_code'=>$matches[1],'code'=>$matches[2]])->id :
        -1;
    }
}
