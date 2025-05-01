<?php

namespace App\Http\Resources\Operation;

use App\Http\Resources\Action\ActionResource;
use App\Http\Resources\Consultation\ConsultationCollection;
use App\Http\Resources\Project\ProjectCollection;
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
            'number'=>$this->number,
            'title'=>$this->title,
            'date_of_notification'=>$this->date_of_notification,
            'initial_ap'=>$this->initial_ap,
            'current_ap'=>$this->current_ap,
            'situation'=>$this->situation_label,
            'action'=>$this->whenLoaded('action',
                fn()=>new ActionResource($this->action),
                fn()=>['code'=>$this->action_code]
            ),
            'projects'=>ProjectCollection::make($this->whenLoaded('projects')),
            'consultations'=>ConsultationCollection::make($this->whenLoaded('consultations')),
        ];
    }
}
