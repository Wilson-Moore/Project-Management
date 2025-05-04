<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
<<<<<<< HEAD
    use SoftDeletes;

    protected $fillable = [
        'objectif',
        'cost',
        'start_date',
        'duration',
        'assessment_date',
        'operation_number',
    ];

    protected $casts = [
        'objectif'=>'string',
        'cost'=>'integer',
        'start_date'=>'datetime',
        'duration'=>'string',
        'assessment_date'=>'datetime',
        'operation_number'=>'string',
    ];

<<<<<<< HEAD
=======
    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

>>>>>>> master
    public function getDurationTextAttribute(): string
    {
        preg_match('/P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/',$this->duration,$matches);

        $parts=[];
        if (!empty($matches[1])) $parts[]="{$matches[1]} year".($matches[1]>1?'s':'');
        if (!empty($matches[2])) $parts[]="{$matches[2]} month".($matches[2]>1?'s':'');
        if (!empty($matches[3])) $parts[]="{$matches[3]} day".($matches[3]>1?'s':'');
        if (!empty($matches[4])) $parts[]="{$matches[4]} hour".($matches[4]>1?'s':'');
        if (!empty($matches[5])) $parts[]="{$matches[5]} minute".($matches[5]>1?'s':'');
        if (!empty($matches[6])) $parts[]="{$matches[6]} second".($matches[6]>1?'s':'');
        
        return implode(' ',$parts) ?:'1 month';
    }

    public function operation(): BelongsTo
    {
        return $this->belongsTo(Operation::class,"operation_number");
    }
=======
    
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
}
