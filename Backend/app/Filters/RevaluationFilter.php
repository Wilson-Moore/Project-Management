<?php

namespace App\Filters;

class RevaluationFilter extends QueryFilter
{
    protected $parms=[
        'year'=>['eq','lt','gt'],
        'amount'=>['eq','le','ge','lt','gt'],
        'operation'=>['eq'],
    ];
    protected $column_map=[
        'year'=>'year',
        'amount'=>'amount',
        'operation'=>'operation_number',
    ];
    protected $operator_map=[
        'eq'=>'=',
        'le'=>'<=',
        'lt'=>'<',
        'ge'=>'>=',
        'gt'=>'>',
    ];
}