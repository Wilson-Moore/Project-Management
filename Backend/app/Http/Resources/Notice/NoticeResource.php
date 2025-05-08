<?php

namespace App\Http\Resources\Notice;

use App\Http\Resources\Operation\OperationResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NoticeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'arab_publication_date'=>$this->arab_publication_date->toDateString(),
            'franch_publication_date'=>$this->french_publication_date->toDateString(),
            'BOMOP_date'=>$this->BOMOP_date->toDateString(),
            'observation'=>$this->observation,
            'active_status'=>$this->active_status,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
        ];
    }
}
