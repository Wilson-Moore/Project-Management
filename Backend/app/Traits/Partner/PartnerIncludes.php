<?php

namespace App\Traits\Partner;

use App\Traits\HasIncludes;

trait PartnerIncludes
{
    use HasIncludes;
    
    protected function allowed(): array
    {
        return ['projects','humanmeans','materialmeans'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
