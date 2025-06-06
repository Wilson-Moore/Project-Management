<?php

namespace App\Traits\Revaluation;

use App\Http\Resources\Operation\OperationResource;

trait RevaluationFields
{
    protected function fields(): array
    {
        return [
            'year'=>$this->year,
            'amount'=>$this->amount,
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['operation_number'=>$this->operation_number]
            ),
        ];
    }
}