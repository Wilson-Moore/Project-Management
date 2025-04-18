<?php

namespace App\Http\Resources\SubProgram;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubProgramResource extends JsonResource
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
            'title'=>$this->title,
            'program'=>$this->program_code,
        ];
    }
}
