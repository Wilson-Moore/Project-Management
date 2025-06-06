<?php

namespace App\Http\Resources\Action;

use App\Traits\Action\ActionFileds;
use App\Traits\HasSparseFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActionResource extends JsonResource
{
    use ActionFileds,HasSparseFields;
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
