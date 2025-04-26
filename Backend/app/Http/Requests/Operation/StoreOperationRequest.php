<?php

namespace App\Http\Requests\Operation;

use App\Rules\OperationNumberRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreOperationRequest extends FormRequest
{
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
        return [
            'number'=>[
                'required','regex:/^[NS][0-9][A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}[0-9]{2}[A-Z0-9]{3}$/',
                new OperationNumberRule($this)],
            'title'=>['required'],
            'date_of_notification'=>['required'],
            'current_ap'=>['required','integer'],
            'initial_ap'=>['required','integer'],
            'action'=>['required','exists:actions,code'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'action_code'=>$this->action,
        ]);
    }
}
