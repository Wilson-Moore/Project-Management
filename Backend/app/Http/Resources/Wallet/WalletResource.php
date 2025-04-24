<?php

namespace App\Http\Resources\Wallet;

use Illuminate\Http\Request;
use App\Http\Resources\Program\ProgramResource;
use Illuminate\Http\Resources\Json\JsonResource;

class WalletResource extends JsonResource
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
            'programs'=>ProgramResource::collection($this->whenLoaded('programs')),
        ];
    }
}
