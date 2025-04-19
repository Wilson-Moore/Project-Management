<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use App\Filters\ProgramFilter;
use App\Http\Resources\Program\ProgramResource;
use App\Http\Resources\Program\ProgramCollection;
use App\Http\Requests\Program\StoreProgramRequest;
use App\Http\Requests\Program\UpdateProgramRequest;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new ProgramFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new ProgramCollection(Program::paginate());
        } else {
            return new ProgramCollection(Program::where($query_items)->paginate());
        }
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProgramRequest $request)
    {
        return new ProgramResource(Program::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Program $program)
    {
        return new ProgramResource($program);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgramRequest $request, Program $program)
    {
        $program->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        $program->delete();
    }
}
