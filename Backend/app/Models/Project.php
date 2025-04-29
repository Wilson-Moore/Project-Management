<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    protected $fillable=[
        'objectif',
        'cost',
        'start_date',
        'duration',
        'assessment_date',
        'operation_number',
    ];

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class,"operation_number");
    }
}
