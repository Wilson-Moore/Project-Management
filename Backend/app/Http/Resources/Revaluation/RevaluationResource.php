<?php

namespace App\Http\Resources\Revaluation;

use App\Traits\HasSparseFields;
use App\Traits\Revaluation\RevaluationFields;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RevaluationResource extends JsonResource
{
    use RevaluationFields,HasSparseFields;

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
