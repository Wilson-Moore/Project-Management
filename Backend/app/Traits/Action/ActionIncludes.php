<?php

namespace App\Traits\Action;

use App\Traits\HasIncludes;

trait ActionIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['subprogram','operations','subprogram.program.wallet'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
