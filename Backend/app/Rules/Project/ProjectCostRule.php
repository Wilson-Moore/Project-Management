<?php

namespace App\Rules\Project;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ProjectCostRule implements ValidationRule
{
    protected $operation_service;
    protected $operation_number;

    public function __construct($operation_number, $operation_service)
    {
        $this->operation_number=$operation_number;
        $this->operation_service=$operation_service;
    }
    
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $operation=$this->operation_service->find(['number'=>$this->operation_number]);
        if (!$operation) {
            $fail('provide',"Can't change cost without specifiying the operation");
            return;
        }

        if ($this->operation_service->has_projects($operation)===0&&(!$this->operation_service->can_add_project($operation,$value))) {
            $fail('exceed',"Project's cost exceeds operation's current ap");
            return;
        }

        if (!$this->operation_service->can_add_project($operation,$value)) {
            $fail('exceeds',"Can't add project for it would allow the cost of the projects to exceeds the operation current ap");
        }
    }
}
