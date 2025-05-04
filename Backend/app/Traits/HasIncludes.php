<?php

namespace App\Traits;

trait HasIncludes
{
    public function include_rule(): array
    {
        return [
            'include'=>['nullable','string'],
        ];
    }

    protected function includes(array $allowed): array
    {
        $includes=explode(',',$this->query('include',''));
        return array_values(array_intersect($allowed,$includes));
    }
}
