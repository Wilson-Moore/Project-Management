<?php

namespace App\Traits\Order;

use App\Http\Resources\Project\ProjectResource;

trait OrderFields
{
    protected function fields(): array
    {
        return [
            'register_number'=>$this->register_number,
            'number'=>$this->number,
            'signature_date'=>$this->signature_date,
            'notification_date'=>$this->notification_date,
            'type'=>$this->type_label,
            'project'=>$this->whenLoaded('project',
                fn()=>new ProjectResource($this->project),
                fn()=>['id'=>$this->project_id]
            ),
        ];
    }
}