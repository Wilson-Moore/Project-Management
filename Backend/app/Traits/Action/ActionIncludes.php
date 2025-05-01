<?php

namespace App\Traits\Action;

trait ActionIncludes
{
    public function rule(): array
    {
        return [
            'include'=>['nullable','string'],
        ];
    }

    public function includes(): array
    {
        $allowed=['subprogram','operations'];
        $includes=explode(',',$this->query('include',''));
        return array_values(array_intersect($allowed,$includes));
    }
}
