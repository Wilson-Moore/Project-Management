<?php

namespace App\Http\Resources\Subprogram;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SubprogramCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}
