<?php

namespace App\Http\Requests\Consultation;

use App\Traits\Consultation\ConsultationValidationRules;
use App\Traits\HasRestore;
use Illuminate\Foundation\Http\FormRequest;

class UpdateConsultationRequest extends FormRequest
{
    use ConsultationValidationRules,HasRestore;
    
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
        return $this->has('restore') 
        ? $this->restore_rule() 
        : $this->update_rules();
    }
}
