<?php

namespace App\Http\Requests\SubProgram;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubProgramRequest extends FormRequest
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
                'code'=>['required','alpha_num','size:2'],
                'title'=>['required'],
                'program'=>['required','exists:programs,code'],
            ];
        } else {
            return [
                'code'=>['sometimes','required','alpha_num','size:2'],
                'title'=>['sometimes','required'],
                'program'=>['sometimes','required','exists:programs,code'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'program_code'=>$this->program
        ]);
    }
}
