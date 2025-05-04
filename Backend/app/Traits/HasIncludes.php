<?php

namespace App\Traits;

trait HasIncludes
{
<<<<<<< HEAD
    public function rule(): array
=======
    public function include_rule(): array
>>>>>>> master
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
