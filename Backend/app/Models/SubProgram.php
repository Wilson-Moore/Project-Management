<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Subprogram extends Model
{
    protected $fillable = [
        'code',
        'title',
        'program_code',
    ];

<<<<<<< HEAD
    protected $casts = [
        'code'=>'string',
        'title'=>'string',
        'program_code'=>'string',
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
    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class,"program_code");
    }

    public function actions(): HasMany
    {
        return $this->hasMany(Action::class);
    }
<<<<<<< HEAD

    protected static function booted()
    {
        static::deleting(function ($subprogram) {
            $subprogram->actions->each->delete();
        });
<<<<<<< HEAD
=======
        
        static::restored(function ($subprogram) {
            $subprogram->actions->each->restore();
        });
>>>>>>> master
    }
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
}
