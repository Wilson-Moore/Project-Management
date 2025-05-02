<?php

namespace App\Traits\Wallet;

use App\Traits\HasIncludes;

trait WalletIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
        return ['programs'];
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
