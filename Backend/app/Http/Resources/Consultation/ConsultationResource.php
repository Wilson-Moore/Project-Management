<?php

namespace App\Http\Resources\Consultation;

use App\Http\Resources\Operation\OperationResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultationResource extends JsonResource
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
            'signature_date'=>$this->signature_date,
            'duration'=>$this->duration_text,
            'observation'=>$this->observation,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
        ];
    }
}
