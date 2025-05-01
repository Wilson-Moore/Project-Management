<?php

namespace App\Http\Requests\Action;

use App\Services\ProgramService;
use App\Services\SubprogramService;
use App\Services\WalletService;
use App\Traits\Action\ActionValidationRules;
use Illuminate\Foundation\Http\FormRequest;


class UpdateActionRequest extends FormRequest
{
    use ActionValidationRules;

    public function __construct(
        protected WalletService $wallet_service,
        protected ProgramService $program_service,
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
        $rules=$this->base_rules($this->wallet_service, $this->program_service, $this->subprogram_service);
        $rules['type']=['required','integer'];

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'type'=>$this->type(),
        ]);
    }
}
