<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait AdjustQuery
{
    public function adjust(array $query_items, Builder $query): Builder
    {
        foreach ($query_items as $condition) {
            if ($condition[1]==='BETWEEN'&&is_array($condition[2])) {
                $query->whereBetween($condition[0],$condition[2]);
            } 
            elseif ($condition[1]==='IN') {
                $query->whereIn($condition[0],(array)$condition[2]);
            }
            elseif ($condition[1]==='IS NULL') {
                $query->whereNull($condition[0]);
            }
            elseif ($condition[1]==='IS NOT NULL') {
                $query->whereNotNull($condition[0]);
            }
            else {
                $query->where($condition[0],$condition[1],$condition[2]);
            }
        }
        return $query;
    }
}
