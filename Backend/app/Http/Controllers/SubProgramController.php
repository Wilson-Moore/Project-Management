<?php

namespace App\Http\Controllers;

use App\Models\Subprogram;
use App\Filters\SubProgramFilter;
use Illuminate\Http\Request;
use App\Http\Resources\SubProgram\SubProgramResource;
use App\Http\Resources\SubProgram\SubProgramCollection;
use App\Http\Requests\SubProgram\StoreSubProgramRequest;
use App\Http\Requests\SubProgram\UpdateSubProgramRequest;

class SubprogramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new SubProgramFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new SubProgramCollection(SubProgram::paginate());
        } else {
            return new SubProgramCollection(SubProgram::where($query_items)->paginate()->appends($request->query()));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubProgramRequest $request)
    {
        return new SubProgramResource(Subprogram::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,Subprogram $subprogram)
    {
        if ($request->query('include_actions')) {
            $subprogram=$subprogram->load('actions');
        }
        return new SubProgramResource($subprogram);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubProgramRequest $request, Subprogram $subprogram)
    {
        $subprogram->update($request->all());
        return new SubProgramResource($subprogram->refresh());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subprogram $subprogram)
    {
        $subprogram->delete();
    }
}
