<?php

namespace App\Http\Resources\Program;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\SubProgram\SubProgramCollection;
use App\Http\Resources\Wallet\WalletResource;

class ProgramResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'code'=>$this->code,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'wallet'=>$this->whenLoaded('wallet',
                fn()=>new WalletResource($this->wallet),
                fn()=>['code'=>$this->wallet_code]
            ),
            'subprograms'=>SubProgramCollection::make($this->whenLoaded('subprograms')),
        ];
    }
}
