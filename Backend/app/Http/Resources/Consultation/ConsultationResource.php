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
            'duration'=>$this->prepare_duration($this->duration),
            'observation'=>$this->observation,
            'operation'=>$this->operation_number,
        ];
    }

    private function prepare_duration(string $duration): string
    {
        preg_match('/P(?:(\d+)M)?(?:(\d+)D)?/',$duration,$matches);
        $months=isset($matches[1])?(int)$matches[1]:0;
        $days=isset($matches[2])?(int)$matches[2]:0;

        $parts=[];
        if ($months>0) {
            $parts[]="{$months} month".($months>1?'s':'');
        }
        if ($days>0) {
            $parts[]="{$days} day".($days>1?'s':'');
        }
        return implode(' ',$parts)?:'1 month';
    }
}
