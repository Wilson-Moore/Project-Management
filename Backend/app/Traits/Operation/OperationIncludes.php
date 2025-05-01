<?php

namespace App\Traits\Operation;

trait OperationIncludes
{
    public function rule(): array
    {
        return [
            'include'=>['nullable','string'],
        ];
    }

    public function includes(): array
    {
        $allowed=['action','projects','consultations'];
        $includes=explode(',',$this->query('include',''));
        return array_values(array_intersect($allowed,$includes));
    }
}
