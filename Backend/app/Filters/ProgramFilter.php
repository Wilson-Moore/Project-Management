<?php

namespace App\Filters;

class ProgramFilter extends QueryFilter
{
    protected $parms=[
        'wallet'=>['eq'],
    ];
    protected $column_map=[
        'wallet'=>'wallet_code',
    ];
    protected $operator_map=[
        'eq'=>'='
    ];
}