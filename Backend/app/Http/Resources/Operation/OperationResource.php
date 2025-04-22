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
            'current ap'=>$this->current_ap,
            'intial ap'=>$this->initial_ap,
            'revaluation'=>$this->revaluation_label,
            'situation'=>$this->situation_label,
            'action'=>$this->action_code,
        ];
    }
}
