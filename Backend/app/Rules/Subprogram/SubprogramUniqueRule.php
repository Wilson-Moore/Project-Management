<?php

namespace App\Rules\Subprogram;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class SubprogramUniqueRule implements ValidationRule
{
    protected $subprogram_service;
    protected $program_code;


    public function __construct($program_code, $subprogram_service)
    {
        $this->program_code=$program_code;
        $this->subprogram_service=$subprogram_service;
    }
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $subprogram=$this->subprogram_service->find(['program_code'=>$this->program_code,'code'=>$value]);
        if ($subprogram) {
            $fail('subprogram',"Subprogram with code '$value' does belong to Program '$this->program_code' choose another code.");
        }
    }
}
