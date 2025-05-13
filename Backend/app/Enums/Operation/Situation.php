<?php

namespace App\Enums\Operation;

enum Situation: int
{
    case InTheWorks=1;
    case OnHalt=2;
    case Completed=3;

    public function label(): string
    {
        return match($this) {
            self::InTheWorks=>'in the works',
            self::OnHalt=>'on halt',
            self::Completed=>'completed',
        };
    }
}