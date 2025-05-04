<?php

namespace App\Traits\Wallet;

use App\Traits\HasIncludes;

trait WalletIncludes
{
    use HasIncludes;

    protected function allowed(): array
    {
<<<<<<< HEAD
        return ['programs'];
=======
        return ['programs.subprograms.actions.operations.projects'];
>>>>>>> master
    }

    public function allowed_includes()
    {
        return $this->includes($this->allowed());
    }
}
