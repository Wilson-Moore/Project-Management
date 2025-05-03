<?php

namespace App\Rules\Action;

use App\Models\Subprogram;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionCodeRule implements ValidationRule
{
    protected $wallet_service;
    protected $program_service;
    protected $subprogram_service;

    public function __construct($wallet_service, $program_service, $subprogram_service)
    {
        $this->wallet_service=$wallet_service;
        $this->program_service=$program_service;
        $this->subprogram_service=$subprogram_service;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!preg_match('/^([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{2})(\d{4})(\d{3})(\d{3})$/',$value,$matches)) {
            $fail('format',"Invalid Format");
            return;
        }
        
        [,$wallet_code,$program_code,$subprogram_code,$action,,$space]=$matches;

        $wallet=$this->wallet_service->find(['code'=>$wallet_code]);
        if (!$wallet) {
            $fail('wallet',"Wallet with code '$wallet_code' does not exist.");
        }
        
        $program=$this->program_service->find(['code'=>$program_code]);
        if (!$program) {
            $fail('program',"Program with code '$program_code' does not belong to Wallet '$wallet_code'.");
        }

        $subprogram=$this->subprogram_service->find(['program_code'=>$program_code,'code'=>$subprogram_code]);
        if (!$subprogram) {
            $fail('subprogram',"Subprogram with code '$subprogram_code' does not belong to Program '$program_code'.");
        }

        if ((int)substr($action,0,1)===1&&$space!=='000') {
            $fail('type',"For internal actions (type 1), the space must be '000' but found '$space'.");
        }
    }
}
