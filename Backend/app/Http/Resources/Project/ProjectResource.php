<?php

namespace App\Http\Resources\Project;

use App\Http\Resources\Operation\OperationResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'objectif'=>$this->objectif,
            'cost'=>$this->cost,
            'start_date'=>$this->start_date->toDateString(),
            'duration'=>$this->duration_text,
            'assessment_date'=>$this->assessment_date->toDateString(),
            'operation'=>$this->whenLoaded('operation',
                fn()=>new OperationResource($this->operation),
                fn()=>['number'=>$this->operation_number]
            ),
        ];
    }
}
