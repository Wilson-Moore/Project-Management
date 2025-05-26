<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Humanmean extends Model
{
    protected $primaryKey='ncas';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'ncas',
        'family_name',
        'name',
        'employer',
        'project_id',
    ];

    protected $casts = [
        'ncas'=>'string',
        'family_name'=>'string',
        'name'=>'string',
        'employer'=>'string',
        'project_id'=>'string',
    ];

    public function partner(): BelongsTo
    {
        return $this->belongsTo(Partner::class,"employer");
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
