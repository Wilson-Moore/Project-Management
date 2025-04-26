<?php

namespace App\Rules\Operation;

use App\Models\Action;
use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class OperationNumberRule implements ValidationRule
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
        $number=$value;
        $actioncode=substr($number,2,18);
        $programcode=substr($number,5,3);
        $checkprogramcode=substr($number,-3,3);

        $action=Action::where('code',$actioncode)->first();
        if (!$action) {
            $fail('code',"Action with code '$actioncode' does not exist.");
        }
        
        if ($programcode!==$checkprogramcode) {
            $fail('code',"Program with code is not the same '$programcode' '$checkprogramcode'.");
        }

        $date=$this->request->input('date_of_notification');
        $last_digits=Carbon::parse($date)->format('y');
        if ($last_digits!==substr($number,20,2)) {
            $fail('checks',"The year in the code is wrong it should be '$last_digits'.");
        }
    }
}
