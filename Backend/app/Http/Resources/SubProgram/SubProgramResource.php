<?php

namespace App\Http\Resources\SubProgram;

use Illuminate\Http\Request;
use App\Http\Resources\Action\ActionCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class SubProgramResource extends JsonResource
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
            'title'=>$this->title,
<<<<<<< HEAD
<<<<<<< HEAD
=======
            'active_status'=>$this->active_status,
>>>>>>> master
            'program'=>$this->whenLoaded('program',
                fn()=>new ProgramResource($this->program),
                fn()=>['code'=>$this->program_code]
            ),
            'actions'=>ActionCollection::make($this->whenLoaded('actions')),
=======
            'program'=>$this->program_code,
            'actions'=>new ActionCollection($this->whenLoaded('actions')),
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
        ];
    }
}
