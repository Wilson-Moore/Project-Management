<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subprogram extends Model
{
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'code',
        'title',
        'program_code',
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
