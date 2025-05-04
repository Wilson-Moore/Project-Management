<?php

namespace App\Filters;

class ProjectFilter extends QueryFilter
{
    protected $parms=[
        'operation'=>['eq'],
        'cost'=>['eq','lt','gt','le','ge'],
        'duration'=>['eq','lt','gt','le','ge'],
    ];
    protected $column_map=[
        'operation'=>'operation_number',
        'cost'=>'cost',
        'duration'=>'duration',
    ];
    protected $operator_map=[
        'eq'=>'=',
        'lt'=>'<',
        'le'=>'<=',
        'gt'=>'>',
        'ge'=>'>=',
    ];
}