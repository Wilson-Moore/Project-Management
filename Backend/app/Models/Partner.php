<?php

namespace App\Models;

use App\Enums\Partner\Domain;
use App\Enums\Partner\Status;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Partner extends Model
{
    use SoftDeletes;

    protected $primaryKey='nif';
    public $incrementing=false;
    protected $keyType='string';

    protected $fillable = [
        'nif',
        'company_name',
        'address',
        'mobile1',
        'mobile2',
        'phone',
        'email',
        'status',
        'city',
        'fax',
        'domain',
        'category',
        'micro',
        'trade_register',
    ];

    protected $casts = [
        'nif'=>'string',
        'company_name'=>'string',
        'address'=>'string',
        'mobile1'=>'string',
        'mobile2'=>'string',
        'phone'=>'string',
        'email'=>'string',
        'status'=>'integer',
        'city'=>'string',
        'fax'=>'string',
        'domain'=>'integer',
        'category'=>'integer',
        'micro'=>'intger',
        'trade_register'=>'string',
    ];

    public function getStatusLabelAttribute(): string
    {
        $status=Status::tryFrom($this->status);
        return $status->label() ?? 'unknown';
    }

    public function getDomainLabelAttribute(): string
    {
        $domain=Domain::tryFrom($this->domain);
        return $domain->label() ?? 'unknown';
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class,"co_contractor");
    }
}