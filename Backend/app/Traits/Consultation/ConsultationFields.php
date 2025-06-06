<?php

namespace App\Traits\Consultation;

use App\Http\Resources\Operation\OperationResource;

Trait ConsultationFields
{
    protected function fields(): array
    {
        return [
            'id'=>$this->id,
            'signature_date'=>$this->signature_date->toDateString(),
            'duration'=>$this->duration_text,
            'observation'=>$this->observation,
            'active_status'=>$this->active_status,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
        ];
    }
}