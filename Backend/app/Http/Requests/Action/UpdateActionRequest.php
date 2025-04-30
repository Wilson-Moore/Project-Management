<?php

namespace App\Http\Requests\Action;

use App\Traits\Action\ActionValidationRules;
use Illuminate\Foundation\Http\FormRequest;


class UpdateActionRequest extends FormRequest
{
    use ActionValidationRules;
    
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
            $rules['subprogram_id']=['nullable'];
        }

        return $rules;
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'subprogram_id'=>$this->subprogram
        ]);
    }
}
