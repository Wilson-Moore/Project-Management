<?php

namespace App\Http\Requests\Subprogram;

use App\Traits\Subprogram\SubprogramIncludes;
use Illuminate\Foundation\Http\FormRequest;

class ShowSubprogramRequest extends FormRequest
{
    use SubprogramIncludes;

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
