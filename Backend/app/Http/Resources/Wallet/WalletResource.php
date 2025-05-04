<?php

namespace App\Http\Resources\Wallet;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Program\ProgramCollection;

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
            'active_status'=>$this->active_status,
>>>>>>> master
            'programs'=>ProgramCollection::make($this->whenLoaded('programs')),
=======
            'programs'=>new ProgramCollection($this->whenLoaded('programs')),
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
        ];
    }
}
