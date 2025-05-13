<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subprogram extends Model
{
    use SoftDeletes,SoftCascadeTrait;

    protected $fillable = [
        'code',
        'title',
        'program_code',
    ];

    protected $casts = [
        'code'=>'string',
        'title'=>'string',
        'program_code'=>'string',
    ];

    protected $appends = [
        'active_status',
    ];

    protected $softCascade = [
        'actions'
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class,"program_code");
    }

    public function actions(): HasMany
    {
        return $this->hasMany(Action::class);
    }
}
