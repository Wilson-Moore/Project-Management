<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Program extends Model
{
    use SoftDeletes,SoftCascadeTrait;

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

    protected $appends = [
        'active_status',
    ];

    protected $softCascade = [
        'subprograms'
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class,"wallet_code");
    }

    public function subprograms(): HasMany
    {
        return $this->hasMany(SubProgram::class);
    }
}
