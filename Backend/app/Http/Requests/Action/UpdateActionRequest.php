<?php

namespace App\Http\Requests\Action;

use App\Models\Program;
use App\Models\Subprogram;
use App\Models\Wallet;
use Illuminate\Foundation\Http\FormRequest;

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
                'code'=>['required','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/'],
                'type'=>['required'],
                'subprogram_code'=>['required','exists:subprograms,code'],
            ];
        } else {
            return [
                'code'=>['sometimes','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/'],
                'type'=>['sometimes','required'],
                'subprogram_code'=>['sometimes','required','exists:subprograms,code'],
            ];
        }
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator){
            $code=$this->input('code');
            $walletcode=substr($code,0,3);
            $programcode=substr($code,3,3);

            $wallet=Wallet::where('code',$walletcode)->first();
            if (!$wallet) {
                $validator->errors()->add('code',"Wallet with code '$walletcode' does not exist.");
            }
            $program=Program::where('code',$programcode)->where('wallet_code',$walletcode)->first();
            if (!$program) {
                $validator->errors()->add('code',"Program with code '$programcode' does not belong to Wallet '$walletcode'.");
            }
        });
    }
}
