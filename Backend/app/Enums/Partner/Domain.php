<?php

namespace App\Enums\Partner;

enum Domain: int
{
    case Building=1;
    case Hydraulic=2;
    case PublicWork=3;
    case Architect=4;
    case Engineer=5;
    case Other=6;

    public function label(): string
    {
        return match($this) {
            self::Building=>'building',
            self::Hydraulic=>'hydraulic',
            self::PublicWork=>'public work',
            self::Architect=>'architect',
            self::Engineer=>'engineer',
            self::Other=>'other',
        };
    }
}
