<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'objectif',
        'cost',
        'duration',
        'operation_number',
        'co_contractor',
    ];

    protected $casts = [
        'objectif'=>'string',
        'cost'=>'integer',
        'duration'=>'string',
        'operation_number'=>'string',
        'co_contractor'=>'string',
    ];

    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

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

    public function partner(): BelongsTo
    {
        return $this->belongsTo(Partner::class,"co_contractor");
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function documents()
    {
        return $this->morphMany(Document::class,'documentable');
    }

    public function humanmeans(): HasMany
    {
        return $this->hasMany(Humanmean::class,"project_id");
    }

    public function materialmeans(): HasMany
    {
        return $this->hasMany(Materialmean::class,"project_id");
    }
}
