<?php

namespace App\Traits\Project;

use App\Traits\HasIncludes;

trait ProjectIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['operation','partner'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
