<?php

namespace App\Filters;

use Illuminate\Http\Request;

class QueryFilter
{
    protected $parms=[];
    protected $column_map=[];
    protected $operator_map=[];

    public function transform(Request $request): array
    {
        $elo_query=[];

        foreach ($this->parms as $param => $operators) {
            $query=$request->query($param);

            if (!isset($query)) {
                continue;
            }

            $column=$this->column_map[$param] ?? $param;

            foreach ($operators as $operator) {
                if (!isset($query[$operator])) {
                    continue;
                }

                $value=$query[$operator];

                if ($operator==='bt'&&is_array($value)&&isset($value['from'],$value['to'])) {
                    $elo_query[]=[$column,'BETWEEN',[$value['from'],$value['to']]];
                }
                elseif ($operator==='in') {
                    $values=is_array($value) ? $value : explode(',',$value);
                    $elo_query[]=[$column,'IN',$values];
                }
                elseif ($operator==='null') {
                    $elo_query[]=[$column,$value ? 'IS NULL' : 'IS NOT NULL'];
                }
                else {
                    $elo_query[]=[$column,$this->operator_map[$operator],$value];
                }
            }
        }

        return $elo_query;
    }
}