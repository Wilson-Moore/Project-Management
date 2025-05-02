<?php

namespace App\Traits\Subprogram;

use App\Traits\HasIncludes;

trait SubprogramIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['program','actions'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
