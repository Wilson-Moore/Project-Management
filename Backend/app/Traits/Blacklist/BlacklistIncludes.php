<?php

namespace App\Traits\Blacklist;

use App\Traits\HasIncludes;

trait BlacklistIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['partner'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
