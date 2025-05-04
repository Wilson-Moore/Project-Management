<?php

namespace App\Traits\Consultation;

use App\Traits\HasIncludes;

trait ConsultationIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['operation'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
