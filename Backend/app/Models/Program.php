<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Program extends Model
{
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'code',
        'title',
        'wallet_code',
    ];

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class,"wallet_code");
    }

    public function subprograms(): HasMany
    {
        return $this->hasMany(Program::class,"subprogram_code");
    }
}
