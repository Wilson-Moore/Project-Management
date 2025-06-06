<?php

namespace App\Traits\Notice;

use App\Http\Resources\Operation\OperationResource;

trait NoticeFields
{
    protected function fields(): array
    {
        return [
            'id'=>$this->id,
            'arab_publication_date'=>$this->arab_publication_date,
            'french_publication_date'=>$this->french_publication_date,
            'BOMOP_date'=>$this->BOMOP_date,
            'observation'=>$this->observation,
            'active_status'=>$this->active_status,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
        ];
    }
}