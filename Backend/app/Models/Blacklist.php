<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Blacklist extends Model
{
    protected $fillable = [
        'entry_date',
        'exit_date',
        'reason',
        'observation',
        'partner_nif',
    ];

    protected $casts = [
        'entry_date'=>'datetime',
        'exit_date'=>'datetime',
        'reason'=>'string',
        'observation'=>'string',
        'partner_nif'=>'string',
    ];

    public function partner(): BelongsTo
    {
        return $this->belongsTo(Partner::class,"partner_nif");
    }
}
