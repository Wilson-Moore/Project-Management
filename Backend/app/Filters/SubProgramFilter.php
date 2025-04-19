<?php

namespace App\Filters;

class SubProgramFilter extends QueryFilter
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