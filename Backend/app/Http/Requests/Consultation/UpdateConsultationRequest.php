<?php

namespace App\Http\Requests\Consultation;

use App\Traits\Consultation\ConsultationValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateConsultationRequest extends FormRequest
{
    use ConsultationValidationRules;
    
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
        $rules=$this->base_rules();

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        
        if ($this->has('operation')) {
            $this->merge([
                'operation_number'=>$this->operation,
            ]);
        }
    }
}
