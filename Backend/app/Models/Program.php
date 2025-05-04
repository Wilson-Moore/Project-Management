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

<<<<<<< HEAD
    protected $casts = [
        'code'=>'string',
        'title'=>'string',
        'wallet_code'=>'string',
    ];

<<<<<<< HEAD
=======
    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

>>>>>>> master
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class,"wallet_code");
    }

    public function subprograms(): HasMany
    {
        return $this->hasMany(SubProgram::class);
    }
<<<<<<< HEAD

    protected static function booted()
    {
        static::deleting(function ($program) {
            $program->subprograms->each->delete();
        });
<<<<<<< HEAD
=======

        static::restored(function ($program) {
            $program->subprograms->each->restore();
        });
>>>>>>> master
    }
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
}
