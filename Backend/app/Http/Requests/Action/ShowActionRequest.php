<?php

namespace App\Http\Requests\Action;

use App\Traits\Action\ActionIncludes;
use Illuminate\Foundation\Http\FormRequest;

class ShowActionRequest extends FormRequest
{
    use ActionIncludes;

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
        return $this->include_rule();
    }
}
