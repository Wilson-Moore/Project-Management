<?php

namespace App\Http\Resources\Order;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'register_number'=>$this->register_number,
            'number'=>$this->number,
            'signature_date'=>$this->signature_date,
            'notification_date'=>$this->notification_date,
            'type'=>$this->type_label,
            'project'=>$this->whenLoaded('project',
                fn()=>new Project($this->project),
                fn()=>['id'=>$this->project_id]
            ),
        ];
    }
}
