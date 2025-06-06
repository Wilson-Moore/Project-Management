<?php

namespace App\Http\Resources\Humanmean;

use App\Traits\HasSparseFields;
use App\Traits\Humanmean\HumanmeanFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HumanmeanResource extends JsonResource
{
    use HumanmeanFields,HasSparseFields;

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
