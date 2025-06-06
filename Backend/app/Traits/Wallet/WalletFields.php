<?php

namespace App\Traits\Wallet;

use App\Http\Resources\Program\ProgramCollection;

Trait WalletFields
{
    protected function fields(): array
    {
        return [
            'code'=>$this->code,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'programs'=>ProgramCollection::make($this->whenLoaded('programs')),
        ];
    }
}