<?php

namespace App\Traits\Materialmean;

use App\Traits\HasIncludes;

trait MaterialmeanIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['partner','project'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}