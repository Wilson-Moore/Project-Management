<?php

namespace App\Http\Resources\Revaluation;

use App\Http\Resources\Operation\OperationResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RevaluationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
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
