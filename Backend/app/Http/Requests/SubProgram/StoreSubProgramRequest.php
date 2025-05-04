<?php

namespace App\Http\Requests\Subprogram;

<<<<<<< HEAD
=======
use App\Services\SubprogramService;
>>>>>>> master
use App\Traits\Subprogram\SubprogramValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreSubprogramRequest extends FormRequest
{
<<<<<<< HEAD
=======
    public function __construct(
        protected SubprogramService $subprogram_service
    ) {}

>>>>>>> master
    use SubprogramValidationRules;
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
        return $this->base_rules();
=======
        return $this->base_rules($this->subprogram_service);
>>>>>>> master
    }
}
