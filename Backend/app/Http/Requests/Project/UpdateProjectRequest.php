<?php

namespace App\Http\Requests\Project;

use App\Rules\DurationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
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
                'objectif'=>['required'],
                'cost'=>['required','integer'],
                'start date'=>['required','date'],
                'duration'=>['required',new DurationRule($this)],
                'assessment date'=>['required','date'],
                'operation'=>['required','exists:operations,number'],
            ];
        } else {
            return [
                'objectif'=>['sometimes','required'],
                'cost'=>['sometimes','required','integer'],
                'start date'=>['sometimes','required','date'],
                'duration'=>['sometimes','required',new DurationRule($this)],
                'assessment date'=>['sometimes','required','date'],
                'operation'=>['sometimes','required','exists:operations,number'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'operation_number'=>$this->operation,
        ]);
    }
}
