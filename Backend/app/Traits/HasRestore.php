<?php

namespace App\Traits;

trait HasRestore
{
    public function restore_rule(): array
    {
        return [
            'restore'=>['nullable','boolean'],
        ];
    }
}
