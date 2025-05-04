<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wallet extends Model
{
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'code',
        'title',
    ];

<<<<<<< HEAD
    protected $casts = [
        'code'=>'string',
        'title'=>'string',
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
    public function programs(): HasMany
    {
        return $this->hasMany(Program::class,"wallet_code");
    }
<<<<<<< HEAD

    protected static function booted()
    {
        static::deleting(function ($wallet) {
            $wallet->programs->each->delete();
        });
<<<<<<< HEAD
=======

        static::restored(function ($wallet) {
            $wallet->programs->each->restore();
        });
>>>>>>> master
    }
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
}
