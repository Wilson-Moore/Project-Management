<?php

namespace App\Traits\Operation;

use App\Traits\HasIncludes;

trait OperationIncludes
{
    use HasIncludes;
    
    protected function allowed(): array
    {
        return ['action','projects','consultations','notices','documents'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
