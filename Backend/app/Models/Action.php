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
        'subprogram_code',
    ];

    public function getTypeLabelAttribute(): string
    {
        return match ($this->type) 
        {
            '1'=>'internal',
            '2'=>'external',
            '3'=>'unique',
            default=>'unknown',
        };
    }

    public function subprogram(): BelongsTo
    {
        return $this->belongsTo(SubProgram::class,"subprogram_code");
    }

    public function operations(): HasMany
    {
        return $this->hasMany(Program::class,"operation_number");
    }
}
