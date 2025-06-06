<?php

namespace App\Http\Resources\Operation;

use App\Traits\HasSparseFields;
use App\Traits\Operation\OperationFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OperationResource extends JsonResource
{
    use OperationFields,HasSparseFields;
    
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
