<?php

namespace App\Http\Resources\Materialmean;

use App\Http\Resources\Partner\PartnerResource;
use App\Http\Resources\Project\ProjectResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MaterialmeanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'number'=>$this->number,
            'type'=>$this->$this->type,
            'registration'=>$this->$this->registration,
            'employer'=>$this->whenLoaded('partner',
                fn()=>new PartnerResource($this->partner),
                fn()=>['nif'=>$this->employer]
            ),
            'project'=>$this->whenLoaded('project',
                fn()=>new ProjectResource($this->project),
                fn()=>['id'=>$this->project_id]
            ),
        ];
    }
}
