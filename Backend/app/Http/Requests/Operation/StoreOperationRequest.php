<?php

namespace App\Http\Requests\Operation;

use App\Models\Action;
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
            'number'=>['required','regex:/^[NS][0-9][A-Z0-9]{3}[A-Z0-9]{3}[A-Z0-9]{2}[1-3][0-9]{4}[0-9]{3}[0-9]{3}[0-9]{2}[A-Z0-9]{3}$/'],
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

    public function withValidator($validator)
    {
        $validator->after(function ($validator){
            $code=$this->input('number');
            $actioncode=substr($code,2,19);
            $programcode=substr($code,5,3);
            $checkprogramcode=substr($code,-3,3);

            $action=Action::where('code',$actioncode)->first();
            if (!$action) {
                $validator->errors()->add('code',"Action with code '$actioncode' does not exist.");
            }
            if ($programcode!==$checkprogramcode) {
                $validator->errors()->add('code',"Program with code is not the same '$programcode' '$checkprogramcode'.");
            }
        });
    }
}
