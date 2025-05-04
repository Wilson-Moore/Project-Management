<?php

namespace App\Http\Requests\SubProgram;

use App\Services\SubprogramService;
use App\Traits\Subprogram\SubprogramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSubprogramRequest extends FormRequest
{
    use SubprogramValidationRules;

    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}
    
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
        $rules=$this->base_rules($this->subprogram_service);

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
    }
}
