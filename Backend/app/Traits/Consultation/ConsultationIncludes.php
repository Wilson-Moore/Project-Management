<?php

namespace App\Traits\Consultation;

use App\Traits\HasIncludes;

trait ConsultationIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['operation','operation.action.subprogram.program.wallet'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
