<?php

namespace App\Filters;

class BlacklistFilter extends QueryFilter
{
    protected $parms=[
        'partner'=>['eq'],
        'entry_date'=>['eq','bt'],
        'exit_date'=>['eq','bt'],
    ];
    protected $column_map=[
        'partner'=>'partner_nif',
        'entry_date'=>'entry_date',
        'exit_date'=>'exit_date',
    ];
    protected $operator_map=[
        'eq'=>'=',
        'bt'=>'BETWWEN',
    ];
}