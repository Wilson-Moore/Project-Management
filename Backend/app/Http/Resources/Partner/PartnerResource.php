<?php

namespace App\Http\Resources\Partner;

use App\Traits\HasSparseFields;
use App\Traits\Partner\PartnerFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PartnerResource extends JsonResource
{
    use PartnerFields,HasSparseFields;
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
