<?php

namespace App\Http\Requests\SubProgram;

<<<<<<< HEAD
<<<<<<< HEAD
=======
use App\Services\SubprogramService;
>>>>>>> master
use App\Traits\Subprogram\SubprogramValidationRules;
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
use Illuminate\Foundation\Http\FormRequest;

class StoreSubProgramRequest extends FormRequest
{
<<<<<<< HEAD
<<<<<<< HEAD
=======
    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}

>>>>>>> master
    use SubprogramValidationRules;
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
        return $this->base_rules();
=======
        return $this->base_rules($this->subprogram_service);
>>>>>>> master
=======
        return [
            'code'=>['required','alpha_num','size:2'],
            'title'=>['required'],
            'program'=>['required','exists:programs,code'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'program_code'=>$this->program
        ]);
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }
}
