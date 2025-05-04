<?php

namespace App\Http\Requests\Action;

<<<<<<< HEAD
use App\Services\ProgramService;
use App\Services\SubprogramService;
use App\Services\WalletService;
use App\Traits\Action\ActionValidationRules;
<<<<<<< HEAD
=======
use App\Traits\HasRestore;
>>>>>>> master
=======
use App\Rules\Action\ActionCodeRule;
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateActionRequest extends FormRequest
{
<<<<<<< HEAD
<<<<<<< HEAD
    use ActionValidationRules;
=======
    use ActionValidationRules,HasRestore;
>>>>>>> master

    public function __construct(
        protected WalletService $wallet_service,
        protected ProgramService $program_service,
        protected SubprogramService $subprogram_service
    ) {}
    
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
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
<<<<<<< HEAD
        $rules=$this->base_rules($this->wallet_service, $this->program_service, $this->subprogram_service);
        $rules['type']=['required','integer'];

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
        }

        return $rules;
=======
        return $this->has('restore') 
        ? $this->restore_rule()
        : $this->update_rules($this->wallet_service, $this->program_service, $this->subprogram_service);
        $rules['type']=['required','integer'];
>>>>>>> master
=======
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
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }
    protected function prepareForValidation()
    {
<<<<<<< HEAD
        $this->merge([
            'subprogram_id'=>$this->subprogram
        ]);
=======
        if ($this->has('type')&&$this->has('subprogram_id')) {
            $this->merge([
                'type'=>$this->type(),
                'subprogram_id'=>$this->id(),
            ]);
        }
>>>>>>> master
    }
}
