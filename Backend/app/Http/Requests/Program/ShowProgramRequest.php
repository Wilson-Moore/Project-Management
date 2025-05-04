<?php

namespace App\Http\Requests\Program;

use App\Traits\Program\ProgramIncludes;
use Illuminate\Foundation\Http\FormRequest;

class ShowProgramRequest extends FormRequest
{
    use ProgramIncludes;

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
        return $this->rule();
=======
        return $this->include_rule();
>>>>>>> master
    }
}
