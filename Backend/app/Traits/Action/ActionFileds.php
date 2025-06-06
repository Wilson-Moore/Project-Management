<?php

namespace App\Traits\Action;

use App\Http\Resources\Operation\OperationCollection;
use App\Http\Resources\Subprogram\SubprogramResource;

trait ActionFileds
{    
    protected function fields(): array
    {
        return [
            'code'=>$this->code,
            'type'=>$this->type_label,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'subprogram'=>$this->whenLoaded('subprogram',
                fn()=>new SubprogramResource($this->subprogram),
                fn()=>[
                    'id'=>$this->subprogram_id,
                    'code'=>substr($this->code,6,2)
                ],
            ),
            'operations'=>OperationCollection::make($this->whenLoaded('operations')),
        ];
    }
}
