<?php

namespace App\Filters;

class OperationFilter extends QueryFilter
{
    protected $parms=[
        'action'=>['eq'],
        'type'=>['eq'],
        'date of notification'=>['eq'],
        'current ap'=>['eq','lt','gr','le','ge'],
        'initial ap'=>['eq','lt','gr','le','ge'],
        'revaluation'=>['eq'],
        'situation'=>['eq'],
    ];
    protected $column_map=[
        'action'=>'action_code',
        'type'=>'type',
        'date of notification'=>'date_of_notification',
        'current ap'=>'current_ap',
        'initial ap'=>'initial_ap',
        'revaluation'=>'revaluation',
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