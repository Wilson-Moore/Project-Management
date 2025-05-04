<?php

namespace App\Http\Requests\Program;

use Illuminate\Foundation\Http\FormRequest;

class StoreProgramRequest extends FormRequest
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
        return [
            'code'=>['required','alpha_num','size:3'],
            'title'=>['required'],
            'wallet'=>['required','exists:wallets,code'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'wallet_code'=>$this->wallet
        ]);
    }
}
