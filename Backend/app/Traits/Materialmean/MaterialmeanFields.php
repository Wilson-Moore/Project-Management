<?php

namespace App\Traits\Materialmean;

use App\Http\Resources\Partner\PartnerResource;
use App\Http\Resources\Project\ProjectResource;

Trait MaterialmeanFields
{
    protected function fields(): array
    {
        return [
            'number'=>$this->number,
            'type'=>$this->type,
            'registration'=>$this->registration,
            'owner'=>$this->whenLoaded('partner',
                fn()=>new PartnerResource($this->partner),
                fn()=>['nif'=>$this->owner]
            ),
            'project'=>$this->whenLoaded('project',
                fn()=>new ProjectResource($this->project),
                fn()=>['id'=>$this->project_id]
            ),
        ];
    }
}