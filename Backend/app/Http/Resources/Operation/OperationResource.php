<?php

namespace App\Http\Resources\Operation;

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
            'ID'=>$this->number,
            'title'=>$this->title,
            'date of notification'=>$this->date_of_notification,
            'intial ap'=>$this->initial_ap,
            'current ap'=>$this->current_ap,
            'situation'=>$this->situation_label,
            'action'=>$this->action_code,
            'projects'=>new ProjectCollection($this->whenLoaded('projects')),
            'consultations'=>new ConsultationCollection($this->whenLoaded('consultations')),
        ];
    }
}
