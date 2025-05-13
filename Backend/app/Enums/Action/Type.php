<?php

namespace App\Enums\Action;

enum Type: int
{
    case Internal=1;
    case External=2;
    case Unique=3;

    public function label(): string
    {
        return match($this) {
            self::Internal=>'internal',
            self::External=>'external',
            self::Unique=>'unique',
        };
    }
}