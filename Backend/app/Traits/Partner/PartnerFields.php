<?php

namespace App\Traits\Partner;

use App\Http\Resources\Humanmean\HumanmeanCollection;
use App\Http\Resources\Materialmean\MaterialmeanCollection;
use App\Http\Resources\Project\ProjectCollection;

trait PartnerFields
{
    protected function fields(): array
    {
        return [
            'nif'=>$this->nif,
            'company_name'=>$this->company_name,
            'address'=>$this->address,
            'mobile1'=>$this->mobile1,
            'mobile2'=>$this->mobile2,
            'phone'=>$this->phone,
            'email'=>$this->email,
            'status'=>$this->status,
            'city'=>$this->city,
            'fax'=>$this->fax,
            'domain'=>$this->domain_label,
            'category'=>$this->category_label,
            'micro'=>$this->micro,
            'trade_register'=>$this->trade_register,
            'projects'=>ProjectCollection::make($this->whenLoaded('projects')),
            'humanmeans'=>HumanmeanCollection::make($this->whenLoaded('humanmeans')),
            'materialmeans'=>MaterialmeanCollection::make($this->whenLoaded('materialmeans')),
        ];
    }
}