<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Consultation extends Model
{
    protected $fillable=[
        'signature_date',
        'duration',
        'observation',
        'operation_number',
    ];

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class,"operation_number");
    }
}
