<?php

namespace App\Http\Resources\Order;

use App\Traits\HasSparseFields;
use App\Traits\Order\OrderFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    use OrderFields,HasSparseFields;

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
