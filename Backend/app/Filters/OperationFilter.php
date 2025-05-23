<?php

namespace App\Filters;

class OperationFilter extends QueryFilter
{
    protected $parms=[
        'action'=>['eq'],
        'date_of_notification'=>['eq','bt'],
        'initial_ap'=>['eq','lt','gt','le','ge'],
        'current_ap'=>['eq','lt','gt','le','ge'],
        'situation'=>['eq'],
    ];
    protected $column_map=[
        'action'=>'action_code',
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
        'bt'=>'BETWEEN',
    ];
}