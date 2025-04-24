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
        'current_ap',
        'initial_ap',
        'revaluation',
        'situation',
        'action_code',
    ];

    public function getrevaluationLabelAttribute(): string
    {
        return match ($this->revaluation) 
        {
            true=>'true',
            false=>'false',
        };
    }

    public function getsituationLabelAttribute(): string
    {
        return match ($this->situation) 
        {
            true=>'in the works',
            false=>'on halt',
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
}
