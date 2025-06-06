<?php

namespace App\Http\Resources\Subprogram;

use Illuminate\Http\Request;
use App\Traits\HasSparseFields;
use App\Traits\Subprogram\SubprogramFields;
use Illuminate\Http\Resources\Json\JsonResource;

class SubprogramResource extends JsonResource
{
    use SubprogramFields,HasSparseFields;

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
