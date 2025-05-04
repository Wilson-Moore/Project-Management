<?php

namespace App\Http\Resources\Subprogram;

use Illuminate\Http\Request;
use App\Http\Resources\Action\ActionCollection;
use App\Http\Resources\Program\ProgramResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SubprogramResource extends JsonResource
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
