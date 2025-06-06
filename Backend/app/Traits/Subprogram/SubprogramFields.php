<?php

namespace App\Traits\Subprogram;

use App\Http\Resources\Action\ActionCollection;
use App\Http\Resources\Program\ProgramResource;

Trait SubprogramFields
{
    protected function fields(): array
    {
        return [
            'id'=>$this->id,
            'code'=>$this->code,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'program'=>$this->whenLoaded('program',
                fn()=>new ProgramResource($this->program),
                fn()=>['code'=>$this->program_code]
            ),
            'actions'=>ActionCollection::make($this->whenLoaded('actions')),
        ];
    }
}