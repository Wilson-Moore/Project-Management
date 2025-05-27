<?php

namespace App\Models;

use App\Enums\Order\Type;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $primaryKey='register_number';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'registe_number',
        'number',
        'signature_date',
        'notification_date',
        'type',
        'project_id',
    ];

    protected $casts = [
        'registe_number'=>'string',
        'number'=>'integer',
        'signature_date'=>'datetime',
        'notification_date'=>'datetime',
        'type',
        'project_id'=>'string',
    ];

    public function getTypeLabelAttribute(): string
    {
        $type=Type::tryFrom($this->type);
        return $type->label() ?? 'unknown';
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
