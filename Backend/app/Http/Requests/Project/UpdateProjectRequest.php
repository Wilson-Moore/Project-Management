<?php

namespace App\Http\Requests\Project;

use App\Services\OperationService;
use App\Traits\Project\ProjectValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    use ProjectValidationRules;

    public function __construct(
        protected OperationService $operation_service,
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
        $rules=$this->base_rules($this->operation_service);

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
    }
}
