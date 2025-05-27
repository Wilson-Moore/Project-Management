<?php

namespace App\Traits\Order;

use App\Traits\HasIncludes;

trait OrderIncludes
{
    use HasIncludes;
    
    protected function allowed(): array
    {
        return ['project'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
