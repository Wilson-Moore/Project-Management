<?php

namespace App\Http\Requests\SubProgram;

<<<<<<< HEAD
=======
use App\Services\SubprogramService;
use App\Traits\HasRestore;
>>>>>>> master
use App\Traits\Subprogram\SubprogramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateSubprogramRequest extends FormRequest
{
<<<<<<< HEAD
    use SubprogramValidationRules;
=======
    use SubprogramValidationRules,HasRestore;

    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}
>>>>>>> master
    
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
        $rules=$this->base_rules();

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
=======
        return $this->has('restore') 
        ? $this->restore_rule() 
        : $this->update_rules($this->subprogram_service);
>>>>>>> master
    }
}
