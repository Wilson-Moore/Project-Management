<?php

namespace App\Rules\Operation;

use App\Models\Action;
use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class OperationNumberRule implements ValidationRule
{
    protected $number;
    protected $date;

    public function __construct($number, $date)
    {
        $this->number=$number;
        $this->date=$date;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!preg_match('/^([NS][0-9])([A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3})([0-9]{2})([A-Z0-9]{3})$/',$this->number,$matches)) {
            $fail('errors',"Invalid Format");
            return;
        }
        
        [,,$action_code,$year,$program_code]=$matches;

        $action=Action::where('code',$action_code)->first();
        if (!$action) return;
        
        $s=substr($action_code,3,3);
        if ($program_code!==substr($action_code,3,3)) {
            $fail('program',"Program with code is not the same '$program_code' '$s'.");
        }

        if ($year!==Carbon::parse($this->date)->format('y')) {
            $fail('year',"The year in the code is wrong it should be '$year'.");
        }
    }
}
