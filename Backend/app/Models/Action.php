<?php

namespace App\Models;

use App\Enums\Action\Type;
use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Action extends Model
{
    use SoftDeletes,SoftCascadeTrait;
    
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';
    
    protected $fillable = [
        'code',
        'type',
        'title',
        'subprogram_id',
    ];

    protected $casts = [
        'code'=>'string',
        'type'=>'integer',
        'title'=>'string',
        'subprogram_id'=>'integer',
    ];

    protected $appends = [
        'active_status',
    ];

    protected $softCascade = [
        'operations'
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function getTypeLabelAttribute(): string
    {
        $type=Type::tryFrom($this->type);
        return $type->label() ?? 'unknown';
    }

    public function subprogram(): BelongsTo
    {
        return $this->belongsTo(SubProgram::class);
    }

    public function operations(): HasMany
    {
        return $this->hasMany(Operation::class,"action_code");
    }
}
