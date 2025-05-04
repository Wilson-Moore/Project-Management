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

        foreach($this->parms as $parm=>$operators) {
            $query=$request->query($parm);
            if (!isset($query)) {
                continue;
            }
            $column=$this->column_map[$parm]??$parm;
            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $elo_query[]=[$column,$this->operator_map[$operator],$query[$operator]];
                }
            }
        }

        return $elo_query;
    }
}