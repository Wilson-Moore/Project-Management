<?php

namespace App\Enums\Order;

enum Type: int
{
    case Start=1;
    case Stop=2;
    case Restart=3;

    public function label(): string
    {
        return match($this) {
            self::Start=>'start',
            self::Stop=>'stop',
            self::Restart=>'restart',
        };
    }
}