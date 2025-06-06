<?php

namespace App\Http\Resources\Notice;

use App\Traits\HasSparseFields;
use App\Traits\Notice\NoticeFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoticeResource extends JsonResource
{
    use NoticeFields,HasSparseFields;
    
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
