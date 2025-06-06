<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

Trait HasSparseFields
{
    protected function selection(array $data,Request $request): array
    {
        $type=$type??$this->type();
        $fields=explode(',',$request->input("fields.$type",''));
        if (empty($fields) || $fields===['']) {
            return $data;
        }
        return Arr::only($data,$fields);
    }

    
    protected function type(): string
    {
        $class=class_basename($this);
        $name=str_replace('Resource','',$class);
        return Str::snake(Str::plural($name),'-');
    }
}