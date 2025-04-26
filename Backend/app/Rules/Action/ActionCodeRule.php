<?php

namespace App\Rules\Action;

use App\Models\Program;
use App\Models\Subprogram;
use App\Models\Wallet;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionCodeRule implements ValidationRule
{
    protected $request;

    public function __construct($request)
    {
        $this->request=$request;
    }
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $code=$value;
        $walletcode=substr($code,0,3);
        $programcode=substr($code,3,3);
        $subprogramcode=substr($code,6,2);
        $space=substr($code,-3,3);

        $wallet=Wallet::where('code',$walletcode)->first();
        if (!$wallet) {
            $fail('checks',"Wallet with code '$walletcode' does not exist.");
        }
        
        $program=Program::where('code',$programcode)->where('wallet_code',$walletcode)->first();
        if (!$program) {
            $fail('checks',"Program with code '$programcode' does not belong to Wallet '$walletcode'.");
        }

        $subprogram=Subprogram::find($this->request->input('subprogram'));
        if (!$subprogram) return;

        if ($subprogram->code!==$subprogramcode) {
            $fail('checks',"Code indicates subprogram '$subprogramcode', but selected subprogram has code '{$subprogram->code}'.");
        }

        if ($subprogram->program_code!==$programcode) {
            $fail('checks',"Subprogram '{$subprogram->code}' does not belong to program '$programcode'.");
        }

        $type=$this->request->input('type');
        if ($type===1&&$space!=='000') {
            $fail('checks',"Type is internal yet the space is '$space'.");
        }
    }
}
