<?php

namespace App\Http\Requests\Program;

use App\Traits\HasRestore;
use App\Traits\Program\ProgramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProgramRequest extends FormRequest
{
    use ProgramValidationRules,HasRestore;

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
