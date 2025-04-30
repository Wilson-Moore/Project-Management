<?php

namespace App\Http\Requests\SubProgram;

use App\Traits\Subprogram\SubprogramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSubprogramRequest extends FormRequest
{
    use SubprogramValidationRules;
    
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
            $rules['program_code']=['nullable'];
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'program_code'=>$this->program
        ]);
    }
}
