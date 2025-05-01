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

    protected $casts = [
        'code'=>'string',
        'title'=>'string',
        'wallet_code'=>'string',
    ];

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class,"wallet_code");
    }

    public function subprograms(): HasMany
    {
        return $this->hasMany(SubProgram::class);
    }
}
