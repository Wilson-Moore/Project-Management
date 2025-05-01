<?php

namespace App\Http\Requests\Operation;

use App\Services\ActionService;
use App\Traits\Operation\OperationValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreOperationRequest extends FormRequest
{
    use OperationValidationRules;

    public function __construct(
        protected ActionService $action_service
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
        return $this->base_rules($this->action_service);
    }
}
