<?php

namespace App\Http\Resources\Humanmean;

use App\Http\Resources\Partner\PartnerResource;
use App\Http\Resources\Project\ProjectResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HumanmeanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'cnas'=>$this->cnas,
            'full_name'=>$this->family_name.' '.$this->name,
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
