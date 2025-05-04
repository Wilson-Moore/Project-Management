<?php

namespace App\Http\Requests\Operation;

use App\Services\ActionService;
<<<<<<< HEAD
=======
use App\Traits\HasRestore;
>>>>>>> master
use App\Traits\Operation\OperationValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateOperationRequest extends FormRequest
{
<<<<<<< HEAD
    use OperationValidationRules;
=======
    use OperationValidationRules,HasRestore;
>>>>>>> master

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
<<<<<<< HEAD
        $rules=$this->base_rules($this->action_service);

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
=======
        return $this->has('restore') 
        ? $this->restore_rule() 
        : $this->update_rules($this->action_service);
>>>>>>> master
    }
}
