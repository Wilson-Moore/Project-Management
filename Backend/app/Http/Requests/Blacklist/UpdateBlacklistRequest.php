<?php

namespace App\Http\Requests\Blacklist;

use App\Traits\Blacklist\BlacklistValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateBlacklistRequest extends FormRequest
{
    use BlacklistValidationRules;
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
        return $this->update_rules();
    }
}
