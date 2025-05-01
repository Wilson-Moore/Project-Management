<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Consultation extends Model
{
    protected $fillable = [
        'signature_date',
        'duration',
        'observation',
        'operation_number',
    ];

    protected $casts = [
        'signature_date'=>'datetime',
        'duration'=>'string',
        'observation'=>'string',
        'operation_number'=>'string',
    ];

    public function getDurationTextAttribute(): string
    {
        preg_match('/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/',$this->duration,$m);

        $parts=[];
        if (!empty($m[1])) $parts[]="{$m[1]} year".($m[1]>1?'s':'');
        if (!empty($m[2])) $parts[]="{$m[2]} month".($m[2]>1?'s':'');
        if (!empty($m[3])) $parts[]="{$m[3]} day".($m[3]>1?'s':'');
        if (!empty($m[4])) $parts[]="{$m[4]} hour".($m[4]>1?'s':'');
        if (!empty($m[5])) $parts[]="{$m[5]} minute".($m[5]>1?'s':'');
        if (!empty($m[6])) $parts[]="{$m[6]} second".($m[6]>1?'s':'');
        
        return implode(' ',$parts) ?:'1 month';
    }

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class,"operation_number");
    }
}
