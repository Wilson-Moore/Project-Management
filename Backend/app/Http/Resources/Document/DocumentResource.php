<?php

namespace App\Http\Resources\Document;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
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
            'name'=>$this->name,
            'mime_type'=>$this->mime_type,
            'size'=>$this->size,
            'is_previewable'=>$this->Previewable(),
            'attached_to'=>[
                'type'=>$this->documentable_type,
                'id'=>$this->documentable_id,
            ],
            'urls'=>[
                'download'=>route('documents.download',$this->id),
                'preview'=>$this->Previewable() 
                    ? route('documents.preview',$this->id)
                    : null,
            ],
        ];
    }

    private function Previewable(): bool
    {
        return in_array($this->mime_type,['application/pdf','image/jpeg','image/png','text/plain',]);
    }
}
