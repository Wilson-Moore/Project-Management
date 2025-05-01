<?php

namespace App\Rules\Action;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionMatchRule implements ValidationRule
{
    protected $id;
    protected $code;
    protected $subprogram_service;

    public function __construct($id, $code, $subprogram_service)
    {
        $this->id=$id;
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
        $subprogram=$this->subprogram_service->find('id',$this->id);
        if (!$subprogram) return;

        if ($subprogram->code!==$this->code) {
            $fail('match',"Code indicates subprogram '$this->code', but selected subprogram has code '{$subprogram->code}'.");
        }
    }
}
