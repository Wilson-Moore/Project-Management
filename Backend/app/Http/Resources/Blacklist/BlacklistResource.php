<?php

namespace App\Http\Resources\Blacklist;

use App\Http\Resources\Partner\PartnerResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlacklistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'entry_date'=>$this->entry_date->toDateString(),
            'exit_date'=>$this->exit_date->toDateString(),
            'reason'=>$this->reason,
            'observation'=>$this->observation,
            'partner'=>$this->whenLoaded('partner',
                fn()=>new PartnerResource($this->partner),
                fn()=>['nif'=>$this->partner_nif]
            ),
        ];;
    }
}
