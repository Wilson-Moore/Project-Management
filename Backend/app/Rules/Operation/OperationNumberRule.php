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
<<<<<<< HEAD
        if (!preg_match('/^([NS][0-9])([A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3})([0-9]{2})([A-Z0-9]{3})$/',$this->number,$matches)) {
            $fail('errors',"Invalid Format");
            return;
        }
        
<<<<<<< HEAD
        [,,$action_code,$year,$program_code]=$matches;
=======
        [,,$action_code,$year,]=$matches;
>>>>>>> master
=======
        $number=$value;
        $actioncode=substr($number,2,18);
        $programcode=substr($number,5,3);
        $checkprogramcode=substr($number,-3,3);
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)

        $action=Action::where('code',$actioncode)->first();
        if (!$action) {
<<<<<<< HEAD
            $fail('action',"Action code of number does not exsits '$action_code'.");
<<<<<<< HEAD
        }
        
        if ($program_code!==substr($action_code,3,3)) {
            $fail('program',"Program with code is not the same '$program_code'.");
=======
>>>>>>> master
=======
            $fail('code',"Action with code '$actioncode' does not exist.");
        }
        
        if ($programcode!==$checkprogramcode) {
            $fail('code',"Program with code is not the same '$programcode' '$checkprogramcode'.");
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
        }

        $date=$this->request->input('date_of_notification');
        $last_digits=Carbon::parse($date)->format('y');
        if ($last_digits!==substr($number,20,2)) {
            $fail('checks',"The year in the code is wrong it should be '$last_digits'.");
        }
    }
}
