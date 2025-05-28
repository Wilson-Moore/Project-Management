<?php

namespace App\Traits\Notice;

use App\Traits\HasIncludes;

trait NoticeIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['operation','operation.action.subprogram.program.wallet'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
