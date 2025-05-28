<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'name',
        'path',
        'mime_type',
        'size',
    ];

    public function documentable()
    {
        return $this->morphTo();
    }
}
