<?php

namespace App\Filters;

class OrderFilter extends QueryFilter
{
    protected $parms=[
        'signature_date'=>['bt'],
        'notification_date'=>['bt'],
    ];
    protected $column_map=[
        'signature_date'=>'signature_date',
        'notification_date'=>'notification_date',
    ];
    protected $operator_map=[
        'br'=>'BETWEEN'
    ];
}
