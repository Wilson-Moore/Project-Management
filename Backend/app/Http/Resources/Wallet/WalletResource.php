<?php

namespace App\Http\Resources\Wallet;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\HasSparseFields;
use App\Traits\Wallet\WalletFields;

class WalletResource extends JsonResource
{
    use WalletFields,HasSparseFields;

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
