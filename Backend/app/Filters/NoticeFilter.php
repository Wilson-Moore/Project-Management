<?php

namespace App\Filters;

class NoticeFilter extends QueryFilter
{
    protected $parms=[
        'operation'=>['eq'],
    ];
    protected $column_map=[
        'operation'=>'operation_number',
    ];
    protected $operator_map=[
        'eq'=>'=',
    ];
}