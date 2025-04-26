<?php

namespace App\Filters;

class OperationFilter extends QueryFilter
{
    protected $parms=[
        'action'=>['eq'],
        'year'=>['eq'],
        'date_of_notification'=>['eq'],
        'initial_ap'=>['eq','lt','gt','le','ge'],
        'current_ap'=>['eq','lt','gt','le','ge'],
        'situation'=>['eq'],
    ];
    protected $column_map=[
        'action'=>'action_code',
        'year'=>'year',
        'date_of_notification'=>'date_of_notification',
        'initial_ap'=>'initial_ap',
        'current_ap'=>'current_ap',
        'situation'=>'situation',  
    ];
    protected $operator_map=[
        'eq'=>'=',
        'lt'=>'<',
        'gt'=>'>',
        'le'=>'<=',
        'ge'=>'>=',
    ];
}