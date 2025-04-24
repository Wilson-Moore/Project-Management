<?php

namespace App\Http\Requests\Action;

use App\Models\Program;
use App\Models\Subprogram;
use App\Models\Wallet;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateActionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $method=$this->method();
        if ($method=="PUT") {
            return [
                'code'=>['required','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/','size:18'],
                'type'=>['required',Rule::in('1','2','3')],
                'subprogram_code'=>['required','exists:subprograms,id'],
            ];
        } else {
            return [
                'code'=>['sometimes','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/','size:18'],
                'type'=>['sometimes','required',Rule::in('1','2','3')],
                'subprogram_code'=>['sometimes','required','exists:subprograms,id'],
            ];
        }
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator){
            if (!$this->has('code')) {
                return;
            }
            $code=$this->input('code');
            $walletcode=substr($code,0,3);
            $programcode=substr($code,3,3);
            $subprogramcode=substr($code,6,2);
            $space=substr($code,-3,3);

            $wallet=Wallet::where('code',$walletcode)->first();
            if (!$wallet) {
                $validator->errors()->add('checks',"Wallet with code '$walletcode' does not exist.");
            }
            $program=Program::where('code',$programcode)->where('wallet_code',$walletcode)->first();
            if (!$program) {
                $validator->errors()->add('checks',"Program with code '$programcode' does not belong to Wallet '$walletcode'.");
            }
            $subprogram=SubProgram::find($this->input('subprogram'));
            if (!$subprogram) return;
            if ($subprogram->code!==$subprogramcode) {
                $validator->errors()->add('checks',"Code indicates subprogram '$subprogramcode', but selected subprogram has code '{$subprogram->code}'.");
            }
            if ($subprogram->program_code!==$programcode) {
                $validator->errors()->add('checks',"Subprogram '{$subprogram->code}' does not belong to program '$programcode'.");
            }
            $type=$this->input('type');
            if ($type===1&&$space!=='000') {
                $validator->errors()->add('checks',"Type is internal yet the space is '$space'.");
            }
        });
    }
}
