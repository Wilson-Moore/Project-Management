<?php

namespace App\Http\Requests\Wallet;

use App\Traits\Wallet\WalletIncludes;
use Illuminate\Foundation\Http\FormRequest;

class ShowWalletRequest extends FormRequest
{
    use WalletIncludes;

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
