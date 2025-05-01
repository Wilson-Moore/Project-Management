<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Operation extends Model
{
    protected $primaryKey='number';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'number',
        'title',
        'date_of_notification',
        'initial_ap',
        'current_ap',
        'situation',
        'action_code',
    ];

    protected $casts = [
        'number'=>'string',
        'title'=>'string',
        'date_of_notification'=>'datetime',
        'initial_ap'=>'integer',
        'current_ap'=>'integer',
        'situation'=>'boolean',
        'action_code'=>'string',
    ];

    public function getSituationLabelAttribute(): string
    {
        return match ($this->situation) 
        {
            1=>'in the works',
            0=>'on halt',
            default=>'unknown',
        };
    }

    public function action(): BelongsTo
    {
        return $this->belongsTo(Action::class,"action_code");
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class,"operation_number");
    }

    public function consultations(): HasMany
    {
        return $this->hasMany(Consultation::class,"operation_number");
    }
}
