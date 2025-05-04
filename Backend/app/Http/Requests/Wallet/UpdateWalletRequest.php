<?php

namespace App\Http\Requests\Wallet;

<<<<<<< HEAD
<<<<<<< HEAD
=======
use App\Traits\HasRestore;
>>>>>>> master
use App\Traits\Wallet\WalletValidationRules;
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
use Illuminate\Foundation\Http\FormRequest;

class UpdateWalletRequest extends FormRequest
{
<<<<<<< HEAD
<<<<<<< HEAD
    use WalletValidationRules;
=======
    use WalletValidationRules,HasRestore;
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
        }

        return $rules;
=======
        return $this->has('restore') 
        ? $this->restore_rule() 
        : $this->update_rules();
>>>>>>> master
=======
        $method=$this->method();
        if ($method=="PUT") {
            return [
                'code'=>['required','alpha_num','size:3'],
                'title'=>['required'],
            ];
        } else {
            return [
                'code'=>['sometimes','required','alpha_num','size:3'],
                'title'=>['sometimes','required'],
            ];
        }
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }
}
