<?php

namespace App\Rules\Action;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionMatchRule implements ValidationRule
{
    protected $code;
    protected $subprogram_service;

    public function __construct($code, $subprogram_service)
    {
        $this->code=$code;
        $this->subprogram_service=$subprogram_service;
    }
    
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $subprogram=$this->subprogram_service->find('id',$value);
        if (!$subprogram) return;

        if ($subprogram->code!==$this->code) {
            $fail('match',"Code indicates subprogram '$this->code', but selected subprogram has code '{$subprogram->code}'.");
        }
    }
}
