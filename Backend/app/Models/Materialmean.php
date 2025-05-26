<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Materialmean extends Model
{
    protected $primaryKey='number';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'number',
        'type',
        'registration',
        'owner',
        'project_id',
    ];

    protected $casts = [
        'number'=>'string',
        'type'=>'string',
        'registration'=>'string',
        'owner'=>'string',
        'project_id'=>'string',
    ];

    public function partner(): BelongsTo
    {
        return $this->belongsTo(Partner::class,"owner");
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
