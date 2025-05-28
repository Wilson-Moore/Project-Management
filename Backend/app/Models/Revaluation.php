<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Revaluation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'year',
        'amount',
        'operation_number',
    ];

    protected $casts = [
        'year'=>'integer',
        'amount'=>'integer',
        'operation_number'=>'string',
    ];

    protected $appends = [
        'active_status',
    ];
}
