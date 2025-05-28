<?php

namespace App\Http\Requests\Order;

use App\Traits\HasRestore;
use App\Traits\Order\OrderValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
{
    use OrderValidationRules,HasRestore;
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
