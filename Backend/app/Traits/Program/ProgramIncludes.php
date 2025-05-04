<?php

namespace App\Traits\Program;

use App\Traits\HasIncludes;

trait ProgramIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['wallet','subprograms'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}