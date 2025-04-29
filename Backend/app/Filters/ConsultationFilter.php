<?php

namespace App\Filters;

class ConsultationFilter extends QueryFilter
{
    protected $parms=[
        'operation'=>['eq'],
        'duration'=>['eq','lt','gt','le','ge'],
    ];
    protected $column_map=[
        'operation'=>'operation_number',
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