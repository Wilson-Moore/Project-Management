<?php

namespace App\Http\Resources\Project;

use Carbon\Carbon;
use DateInterval;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'objectif'=>$this->objectif,
            'cost'=>$this->cost,
            'start date'=>$this->start_date,
            'duration'=>$this->prepare_duration($this->duration),
            'assessment date'=>$this->assessment_date,
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
