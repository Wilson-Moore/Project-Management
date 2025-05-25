<?php

namespace App\Http\Requests\Blacklist;

use App\Traits\Blacklist\BlacklistIncludes;
use Illuminate\Foundation\Http\FormRequest;

class ShowBlacklistRequest extends FormRequest
{
    use BlacklistIncludes;
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
