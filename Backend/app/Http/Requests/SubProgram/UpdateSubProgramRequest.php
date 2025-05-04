<?php

namespace App\Http\Requests\SubProgram;

<<<<<<< HEAD
<<<<<<< HEAD
=======
use App\Services\SubprogramService;
use App\Traits\HasRestore;
>>>>>>> master
use App\Traits\Subprogram\SubprogramValidationRules;
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
use Illuminate\Foundation\Http\FormRequest;

class UpdateSubProgramRequest extends FormRequest
{
<<<<<<< HEAD
<<<<<<< HEAD
    use SubprogramValidationRules;
=======
    use SubprogramValidationRules,HasRestore;

    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}
>>>>>>> master
    
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
        $rules=$this->base_rules();

        if ($this->isMethod('PATCH')) {
            foreach ($rules as &$rule) {
                array_unshift($rule,'sometimes');
            }
=======
        $method=$this->method();
        if ($method=="PUT") {
            return [
                'code'=>['required','alpha_num','size:2'],
                'title'=>['required'],
                'program'=>['required','exists:programs,code'],
            ];
        } else {
            return [
                'code'=>['sometimes','required','alpha_num','size:2'],
                'title'=>['sometimes','required'],
                'program'=>['sometimes','required','exists:programs,code'],
            ];
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
        }
    }

<<<<<<< HEAD
        return $rules;
=======
        return $this->has('restore') 
        ? $this->restore_rule() 
        : $this->update_rules($this->subprogram_service);
>>>>>>> master
=======
    protected function prepareForValidation()
    {
        $this->merge([
            'program_code'=>$this->program
        ]);
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }
}
