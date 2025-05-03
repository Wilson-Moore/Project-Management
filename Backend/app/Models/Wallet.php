<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wallet extends Model
{
    use SoftDeletes;
    
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'code',
        'title',
    ];

    protected $casts = [
        'code'=>'string',
        'title'=>'string',
    ];

    public function programs(): HasMany
    {
        return $this->hasMany(Program::class,"wallet_code");
    }

    protected static function booted()
    {
        static::deleting(function ($wallet) {
            $wallet->programs->each(function ($program) {
                $program->delete();
            });
        });
    }
}
