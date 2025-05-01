<?php

namespace App\Traits\Project;

trait ProjectIncludes
{
    public function rule(): array
    {
        return [
            'include'=>['nullable','string'],
        ];
    }

    public function includes(): array
    {
        $allowed=['operation'];
        $includes=explode(',',$this->query('include',''));
        return array_values(array_intersect($allowed,$includes));
    }
}
