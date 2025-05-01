<?php

namespace App\Rules\Action;

use App\Models\Program;
use App\Models\Wallet;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionCodeRule implements ValidationRule
{
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
        
        [,$wallet_code,$program_code,,$action,,$space]=$matches;

        $wallet=Wallet::where('code',$wallet_code)->first();
        if (!$wallet) {
            $fail('wallet',"Wallet with code '$wallet_code' does not exist.");
        }
        
        $program=Program::where('code',$program_code)->where('wallet_code',$wallet_code)->first();
        if (!$program) {
            $fail('program',"Program with code '$program_code' does not belong to Wallet '$wallet_code'.");
        }

        if ((int)substr($action,0,1)===1&&$space!=='000') {
            $fail('type',"For internal actions (type 1), the space must be '000' but found '$space'.");
        }
    }
}
