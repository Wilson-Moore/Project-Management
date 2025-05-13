<?php

namespace App\Filters;

class PartnerFilter extends QueryFilter
{
    protected $parms=[
        'domain'=>['eq'],
        'micro'=>['eq'],
        'status'=>['eq'],
        'category'=>['eq',],
    ];
    protected $column_map=[
        'domain'=>'domain',
        'micro'=>'micro',
        'status'=>'status',
        'category'=>'category',  
    ];
    protected $operator_map=[
        'eq'=>'=',
    ];
}