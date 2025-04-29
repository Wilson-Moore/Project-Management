<?php

namespace App\Http\Resources\Consultation;

use DateInterval;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConsultationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID'=>$this->id,
            'signature date'=>$this->signature_date,
            'duration'=>$this->duration_text,
            'observation'=>$this->observation,
            'operation'=>$this->operation_number,
        ];
    }
}
