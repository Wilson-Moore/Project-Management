<?php

namespace App\Http\Resources\Consultation;

use App\Traits\Consultation\ConsultationFields;
use App\Traits\HasSparseFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultationResource extends JsonResource
{
    use ConsultationFields,HasSparseFields;
    
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->selection($this->fields(),$request);
    }
}
