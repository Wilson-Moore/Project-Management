<?php

namespace App\Models;

use App\Enums\Operation\Situation;
use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Operation extends Model
{
    use SoftDeletes,SoftCascadeTrait;

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
        'observation',
        'individualized',
        'action_code',
    ];

    protected $casts = [
        'number'=>'string',
        'title'=>'string',
        'date_of_notification'=>'datetime',
        'initial_ap'=>'integer',
        'current_ap'=>'integer',
        'situation'=>'integer',
        'observation'=>'string',
        'individualized'=>'integer',
        'action_code'=>'string',
    ];

    protected $softCascade = [
        'projects',
        'consultations',
        'notices',
        'revaluations'
    ];

    public function getSituationLabelAttribute(): string
    {
        $situation=Situation::tryFrom($this->situation);
        return $situation->label() ?? 'unknown';
    }

    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
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

    public function notices(): HasMany
    {
        return $this->hasMany(Notice::class,"operation_number");
    }

    public function revaluations(): HasMany
    {
        return $this->hasMany(Revaluation::class,"operation_number");
    }

    public function documents()
    {
        return $this->morphMany(Document::class,'documentable');
    }
}
