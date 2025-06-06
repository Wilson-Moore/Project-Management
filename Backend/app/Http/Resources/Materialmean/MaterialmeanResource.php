<?php

namespace App\Http\Resources\Materialmean;

use App\Traits\HasSparseFields;
use App\Traits\Materialmean\MaterialmeanFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MaterialmeanResource extends JsonResource
{
    use MaterialmeanFields,HasSparseFields;
    
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
