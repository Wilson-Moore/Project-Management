<?php

namespace App\Filters;

class ActionFilter extends QueryFilter
{
    protected $parms=[
        'subprogram'=>['eq'],
        'type'=>['eq','in'],
    ];
    protected $column_map=[
        'subprogram'=>'subprogram_id',
        'type'=>'type',
    ];
    protected $operator_map=[
        'eq'=>'=',
        'in'=>'IN'
    ];
}