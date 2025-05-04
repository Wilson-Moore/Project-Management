<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Program extends Model
{
    use SoftDeletes;

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

    protected static function booted()
    {
        static::deleting(function ($program) {
            $program->subprograms->each->delete();
        });

        static::restored(function ($program) {
            $program->subprograms->each->restore();
        });
    }
}
