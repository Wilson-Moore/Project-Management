<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Action extends Model
{
    use SoftDeletes;
    
    protected $primaryKey='code';
    public $incrementing=false;
    protected $keyType='string';
    
    protected $fillable = [
        'code',
        'type',
        'title',
        'subprogram_id',
    ];

    protected $casts = [
        'code'=>'string',
        'type'=>'integer',
        'title'=>'string',
        'subprogram_id'=>'integer',
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
    public function getTypeLabelAttribute(): string
    {
        return match ($this->type) 
        {
            1=>'internal',
            2=>'external',
            3=>'unique',
            default=>'unknown',
        };
    }

    public function subprogram(): BelongsTo
    {
        return $this->belongsTo(SubProgram::class);
    }

    public function operations(): HasMany
    {
        return $this->hasMany(Operation::class,"action_code");
    }

    protected static function booted()
    {
        static::deleting(function ($action) {
            $action->operations->each->delete();
        });
<<<<<<< HEAD
=======

        static::restored(function ($action) {
            $action->operations->each->restore();
        });
>>>>>>> master
    }
}
