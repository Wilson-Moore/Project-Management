<?php

namespace App\Http\Requests\Materialmean;

use App\Traits\Blacklist\MaterialmeanValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreMaterialmeanRequest extends FormRequest
{
    use MaterialmeanValidationRules;
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
        return $this->base_rules();
    }
}
