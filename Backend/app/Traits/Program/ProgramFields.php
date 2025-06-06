<?php

namespace App\Traits\Program;

use App\Http\Resources\Subprogram\SubprogramCollection;
use App\Http\Resources\Wallet\WalletResource;

Trait ProgramFields
{
    protected function fields(): array
    {
        return [
            'code'=>$this->code,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'wallet'=>$this->whenLoaded('wallet',
                fn()=>new WalletResource($this->wallet),
                fn()=>['code'=>$this->wallet_code]
            ),
            'subprograms'=>SubprogramCollection::make($this->whenLoaded('subprograms')),
        ];
    }
}