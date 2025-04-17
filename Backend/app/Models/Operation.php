<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Operation extends Model
{
    /** @use HasFactory<\Database\Factories\OperationFactory> */
    use HasFactory;

    protected $fillable = [
        'code',
        'title',
        'date_of_notification',
        'current_ap',
        'initial_ap',
        'revaluation',
        'situation',
    ];

    public function action(): BelongsTo
    {
        return $this->belongsTo(Action::class,"action_code");
    }

    // public function projects(): HasMany
    // {
    //     return $this->hasMany(Project::class,"");
    // }
}
