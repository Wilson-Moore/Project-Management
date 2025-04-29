<?php

namespace App\Http\Requests\Consultation;

use App\Rules\DurationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateConsultationRequest extends FormRequest
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
                'signature_date'=>['required','date'],
                'duration'=>['required',new DurationRule($this)],
                'observation'=>['required'],
                'operation_number'=>['required','exist:operations,number'],
            ];
        } else {
            return [
                'signature_date'=>['sometimes','required','date'],
                'duration'=>['sometimes','required',new DurationRule($this)],
                'observation'=>['sometimes','required'],
                'operation_number'=>['sometimes','required','exists:operations,number'],
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
