<?php

namespace App\Http\Resources\Operation;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OperationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID'=>$this->number,
            'title'=>$this->title,
            'date of notification'=>$this->date_of_notification,
            'intial ap'=>$this->initial_ap,
            'current ap'=>$this->current_ap,
            'situation'=>$this->situation_label,
<<<<<<< HEAD
<<<<<<< HEAD
=======
            'active_status'=>$this->active_status,
>>>>>>> master
            'action'=>$this->whenLoaded('action',
                fn()=>new ActionResource($this->action),
                fn()=>['code'=>$this->action_code]
            ),
            'projects'=>ProjectCollection::make($this->whenLoaded('projects')),
            'consultations'=>ConsultationCollection::make($this->whenLoaded('consultations')),
=======
            'action'=>$this->action_code,
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
        ];
    }
}
