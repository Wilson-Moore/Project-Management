<?php

namespace App\Enums\Partner;

enum Status: int
{
    case Physical=1;
    case Morale=2;
    case Mixed=3;

    public function label(): string
    {
        return match($this) {
            self::Physical=>'physical',
            self::Morale=>'morale',
            self::Mixed=>'mixed',
        };
    }
}
