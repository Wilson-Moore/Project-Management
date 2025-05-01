<?php

namespace App\Filters;

class SubprogramFilter extends QueryFilter
{
    protected $parms=[
        'program'=>['eq'],
    ];
    protected $column_map=[
        'program'=>'program_code',
    ];
    protected $operator_map=[
        'eq'=>'='
    ];
}