<?php

namespace App\Filters;

class ActionFilter extends QueryFilter
{
    protected $parms=[
        'subprogram'=>['eq'],
        'type'=>['eq'],
    ];
    protected $column_map=[
        'subprogram'=>'subprogram_id',
        'type'=>'type',
    ];
    protected $operator_map=[
        'eq'=>'='
    ];
}