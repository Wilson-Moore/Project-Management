<?php

namespace App\Http\Resources\Program;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\SubProgram\SubProgramCollection;

class ProgramResource extends JsonResource
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
            'wallet'=>$this->wallet_code,
            'subprograms'=>new SubProgramCollection($this->whenLoaded('subprograms')),
        ];
    }
}
