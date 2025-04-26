<?php

namespace App\Http\Requests\Action;

use App\Rules\ActionCodeRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateActionRequest extends FormRequest
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
        $method=$this->method();
        if ($method=="PUT") {
            return [
                'code'=>[
                    'required','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/',
                    'size:18',new ActionCodeRule($this)],
                'type'=>['required',Rule::in(1,2,3)],
                'title'=>['required'],
                'subprogram_id'=>['required','exists:subprograms,id'],
            ];
        } else {
            return [
                'code'=>[
                    'sometimes','regex:/^[A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[0-9]{4}[0-9]{3}[0-9]{3}$/',
                    'size:18',new ActionCodeRule($this)],
                'type'=>['sometimes','required',Rule::in(1,2,3)],
                'title'=>['sometimes','required'],
                'subprogram_id'=>['sometimes','required','exists:subprograms,id'],
            ];
        }
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'subprogram_id'=>$this->subprogram
        ]);
    }
}
