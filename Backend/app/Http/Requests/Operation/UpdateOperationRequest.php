<?php

namespace App\Http\Requests\Operation;

use App\Traits\Operation\OperationValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateOperationRequest extends FormRequest
{
    use OperationValidationRules;
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
        if ($this->has('action')) {
            $this->merge([
                'action_code'=>$this->action,
            ]);
        }
    }
}
