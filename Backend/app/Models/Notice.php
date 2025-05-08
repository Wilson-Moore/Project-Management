<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notice extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'arab_publication_date',
        'franch_publication_date',
        'BOMOP_date',
        'observation',
        'operation_number',
    ];

    protected $casts = [
        'arab_publication_date'=>'datetime',
        'franch_publication_date'=>'datetime',
        'BOMOP_date'=>'datetime',
        'observation'=>'string',
        'operation_number'=>'string',
    ];

    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class,"operation_number");
    }
}
