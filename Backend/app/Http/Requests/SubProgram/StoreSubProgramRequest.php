<?php

namespace App\Http\Requests\Subprogram;

use App\Services\SubprogramService;
use App\Traits\Subprogram\SubprogramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreSubprogramRequest extends FormRequest
{
    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}

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
        return $this->base_rules($this->subprogram_service);
    }
}
