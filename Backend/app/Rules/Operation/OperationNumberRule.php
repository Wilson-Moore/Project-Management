<?php

namespace App\Rules\Operation;

use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class OperationNumberRule implements ValidationRule
{
    protected $number;
    protected $date;
    protected $action_service;

    public function __construct($number, $date, $action_service)
    {
        $this->number=$number;
        $this->date=$date;
        $this->action_service=$action_service;
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
        
        [,,$action_code,$year,]=$matches;

        $action=$this->action_service->find(['code'=>$action_code]);
        if (!$action) {
            $fail('action',"Action code of number does not exsits '$action_code'.");
        }

        if ($year!==Carbon::parse($this->date)->format('y')) {
            $fail('year',"The year in the code is wrong it should be '$year'.");
        }
    }
}
