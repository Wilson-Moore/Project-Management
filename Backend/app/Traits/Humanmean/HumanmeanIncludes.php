<?php

namespace App\Traits\Humanmean;

use App\Traits\HasIncludes;

trait HumanmeanIncludes
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