<?php

namespace App\Models;

use Askedio\SoftCascade\Traits\SoftCascadeTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wallet extends Model
{
    use SoftDeletes,SoftCascadeTrait;
    
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

    protected $appends = [
        'active_status',
    ];

    protected $softCascade = [
        'programs'
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function programs(): HasMany
    {
        return $this->hasMany(Program::class,"wallet_code");
    }
}
