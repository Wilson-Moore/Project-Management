<?php

namespace App\Http\Resources\Blacklist;

use App\Traits\Blacklist\BlacklistFields;
use App\Traits\HasSparseFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlacklistResource extends JsonResource
{
    use BlacklistFields,HasSparseFields;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->selection($this->fields(),$request);
    }
}
