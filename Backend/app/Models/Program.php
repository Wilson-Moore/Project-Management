<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Program extends Model
{
    /** @use HasFactory<\Database\Factories\ProgramFactory> */
    use HasFactory;

    protected $fillable = [
        'code',
        'title',
    ];

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class,"wallet_code");
    }

    public function sub_programs(): HasMany
    {
        return $this->hasMany(Program::class,"sub_program_code");
    }
}
