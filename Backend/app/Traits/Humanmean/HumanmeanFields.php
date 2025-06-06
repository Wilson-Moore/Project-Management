<?php

namespace App\Traits\Humanmean;

use App\Http\Resources\Partner\PartnerResource;
use App\Http\Resources\Project\ProjectResource;

Trait HumanmeanFields
{
    protected function fields(): array
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