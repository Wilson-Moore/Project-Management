<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SubProgram extends Model
{
    /** @use HasFactory<\Database\Factories\SubProgramFactory> */
    use HasFactory;

    protected $fillable = [
        'code',
        'title',
    ];

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class,"program_code");
    }

    public function actions(): HasMany
    {
        return $this->hasMany(Action::class,"action_code");
    }
}
