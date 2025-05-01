<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subprogram extends Model
{
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

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class,"program_code");
    }

    public function actions(): HasMany
    {
        return $this->hasMany(Action::class);
    }
}
