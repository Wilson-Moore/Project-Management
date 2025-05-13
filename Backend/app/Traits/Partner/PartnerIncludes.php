<?php

namespace App\Traits\Partner;

use App\Traits\HasIncludes;

trait PartnerIncludes
{
    use HasIncludes;
    
    protected function allowed(): array
    {
        return ['projects'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
