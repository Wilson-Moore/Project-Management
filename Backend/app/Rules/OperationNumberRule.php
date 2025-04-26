<?php

namespace App\Rules;

use App\Models\Action;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class OperationNumberRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $code=$value;
        $actioncode=substr($code,2,18);
        $programcode=substr($code,5,3);
        $checkprogramcode=substr($code,-3,3);

        $action=Action::where('code',$actioncode)->first();
        if (!$action) {
            $fail('code',"Action with code '$actioncode' does not exist.");
        }
        if ($programcode!==$checkprogramcode) {
            $fail('code',"Program with code is not the same '$programcode' '$checkprogramcode'.");
        }
    }
}
