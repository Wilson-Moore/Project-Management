<?php

namespace App\Http\Resources\Action;

use App\Http\Resources\Operation\OperationCollection;
use App\Http\Resources\Subprogram\SubprogramResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ActionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'code'=>$this->code,
            'type'=>$this->type_label,
            'title'=>$this->title,
            'active_status'=>$this->active_status,
            'subprogram'=>$this->whenLoaded('subprogram',
                fn()=>new SubProgramResource($this->subprogram),
                fn()=>[
                    'id'=>$this->subprogram_id,
                    'code'=>substr($this->code,6,2)
                ],
            ),
            'operations'=>OperationCollection::make($this->whenLoaded('operations')),
        ];
    }
}
