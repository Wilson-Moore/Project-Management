<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Operation extends Model
{
    protected $primaryKey='number';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'number',
        'title',
        'date_of_notification',
        'initial_ap',
        'current_ap',
        'situation',
        'action_code',
    ];

    public function getsituationLabelAttribute(): string
    {
        return match ($this->situation) 
        {
            1=>'in the works',
            0=>'on halt',
            default=>'unknown',
        };
    }

    protected $appends = [
        'active_status',
    ];

    public function getActiveStatusAttribute(): string
    {
        return $this->trashed() ? "Archived" : "Active";
    }

    public function action(): BelongsTo
    {
        return $this->belongsTo(Action::class,"action_code");
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class,"operation_number");
    }

    public function consultations(): HasMany
    {
        return $this->hasMany(Consultation::class,"operation_number");
    }
<<<<<<< HEAD

    protected static function booted()
    {
        static::deleting(function ($operation) {
            $operation->projects->each->delete();
            $operation->consultations->each->delete();
        });
<<<<<<< HEAD
=======

        static::restored(function ($operation) {
            $operation->projects->each->restore();
            $operation->consultations->each->restore();
        });
>>>>>>> master
    }
=======
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
}
