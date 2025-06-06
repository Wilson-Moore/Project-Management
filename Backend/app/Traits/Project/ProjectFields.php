<?php

namespace App\Traits\Project;

use App\Http\Resources\Operation\OperationResource;
use App\Http\Resources\Partner\PartnerResource;

trait ProjectFields
{    
    protected function fields(): array
    {
        return [
            'id'=>$this->id,
            'objectif'=>$this->objectif,
            'cost'=>$this->cost,
            'duration'=>$this->duration_text,
            'active_status'=>$this->active_status,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
            'co_contractor'=>$this->whenLoaded('partner',
                fn()=>new PartnerResource($this->partner),
                fn()=>['nif'=>$this->co_contractor]
            ),
        ];
    }
}
