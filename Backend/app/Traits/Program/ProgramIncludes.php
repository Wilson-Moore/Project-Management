<?php

namespace App\Traits\Program;

trait ProgramIncludes
{
    public function rule(): array
    {
        return [
            'include'=>['nullable','string'],
        ];
    }

    public function includes(): array
    {
        $allowed=['wallet','subprograms'];
        $includes=explode(',', $this->query('include', ''));
        return array_values(array_intersect($allowed,$includes));
    }
}