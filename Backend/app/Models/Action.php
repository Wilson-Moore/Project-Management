<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Action extends Model
{
    protected $fillable = [
        'code',
        'title',
    ];

    public function sub_program(): BelongsTo
    {
        return $this->belongsTo(SubProgram::class,"sub_program_code");
    }

    public function operations(): HasMany
    {
        return $this->hasMany(Program::class,"operation_code");
    }
}
