<?php

namespace App\Traits\Blacklist;

use App\Http\Resources\Partner\PartnerResource;

Trait BlacklistFields
{
    protected function fields(): array
    {
        return [
            'id'=>$this->id,
            'entry_date'=>$this->entry_date->toDateString(),
            'exit_date'=>$this->exit_date->toDateString(),
            'reason'=>$this->reason,
            'observation'=>$this->observation,
            'partner'=>$this->whenLoaded('partner',
                fn()=>new PartnerResource($this->partner),
                fn()=>['nif'=>$this->partner_nif]
            ),
        ];
    }
}