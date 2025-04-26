<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Action extends Model
{
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';
    
    protected $fillable = [
        'code',
        'type',
        'title',
        'subprogram_id',
    ];

    public function getTypeLabelAttribute(): string
    {
        return match ($this->type) 
        {
            1=>'internal',
            2=>'external',
            3=>'unique',
            default=>'unknown',
        };
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
