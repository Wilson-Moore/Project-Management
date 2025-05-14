<?php

namespace App\Http\Requests\Revaluation;

use App\Traits\HasRestore;
use App\Traits\Revaluation\RevaluationValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRevaluationRequest extends FormRequest
{
    use RevaluationValidationRules,HasRestore;

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
