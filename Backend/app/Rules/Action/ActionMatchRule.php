<?php

namespace App\Rules\Action;

use App\Models\Subprogram;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ActionMatchRule implements ValidationRule
{
    protected $id;
    protected $code;

    public function __construct($id, $code)
    {
        $this->id=$id;
        $this->code=$code;
    }
    
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $subprogram=Subprogram::find($this->id);
        if (!$subprogram) return;

        if ($subprogram->code!==$this->code) {
            $fail('match',"Code indicates subprogram '$this->code', but selected subprogram has code '{$subprogram->code}'.");
        }
    }
}
