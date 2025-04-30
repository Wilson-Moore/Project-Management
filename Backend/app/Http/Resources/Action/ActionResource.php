<?php

namespace App\Http\Resources\Action;

use App\Http\Resources\Operation\OperationCollection;
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
            'subprogram'=>[
                'ID'=>$this->subprogram_id,
                'Code'=>substr($this->code,6,2)
            ],
            'operations'=>new OperationCollection($this->whenLoaded('operations')),
        ];
    }
}
