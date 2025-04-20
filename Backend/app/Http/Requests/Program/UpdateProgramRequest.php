<?php

namespace App\Http\Requests\Program;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProgramRequest extends FormRequest
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
                'code'=>['required','alpha_num','size:3'],
                'title'=>['required'],
                'wallet'=>['required']
            ];
        } else {
            return [
                'code'=>['sometimes','required','alpha_num','size:3'],
                'title'=>['sometimes','required'],
                'wallet'=>['sometimes','required']
            ];
        }
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'wallet_code'=>$this->wallet
        ]);
    }
}
