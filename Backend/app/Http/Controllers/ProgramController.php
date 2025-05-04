<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;
use App\Filters\ProgramFilter;
use App\Http\Requests\Program\ShowProgramRequest;
use App\Services\ProgramService;
use App\Http\Resources\Program\ProgramResource;
use App\Http\Resources\Program\ProgramCollection;
use App\Http\Requests\Program\StoreProgramRequest;
use App\Http\Requests\Program\UpdateProgramRequest;

class ProgramController extends Controller
{
    public function __construct(
        protected ProgramFilter $filter,
        protected ProgramService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $programs=$this->service->all($query_items,$request);
        return new ProgramCollection($programs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProgramRequest $request)
    {
        $program=$this->service->create($request->all());
        return (new ProgramResource($program))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowProgramRequest $request, Program $program)
    {
        $program=$this->service->get($program,$request->allowed_includes());
        return new ProgramResource($program);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgramRequest $request, Program $program)
    {
        $request->boolean('restore')
        ? $program=$this->service->restore($program)
        : $program=$this->service->update($program,$request->validated());
        return new ProgramResource($program);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        $this->service->delete($program);
        return response()->noContent();
    }
}
