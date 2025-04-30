<?php

namespace App\Http\Controllers;

use App\Models\Subprogram;
use App\Filters\SubprogramFilter;
use Illuminate\Http\Request;
use App\Http\Resources\SubProgram\SubprogramResource;
use App\Http\Resources\SubProgram\SubprogramCollection;
use App\Http\Requests\SubProgram\StoreSubprogramRequest;
use App\Http\Requests\SubProgram\UpdateSubprogramRequest;
use App\Services\SubprogramService;

class SubprogramController extends Controller
{
    public function __construct(
        protected SubprogramFilter $filter,
        protected SubprogramService $service
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        
        $subprograms=empty($query_items)
        ? SubProgram::paginate()
        : SubProgram::where($query_items)->paginate()->appends($request->query());

        return new SubprogramCollection($subprograms);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubprogramRequest $request)
    {
        $subprogram=$this->service->create($request->all());
        return (new SubprogramResource($subprogram))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,Subprogram $subprogram)
    {
        $with=[];
        if ($request->query('include_actions')) $with[]='actions';

        if (!empty($with)) {
            $subprogram=$subprogram->load($with);
        }
        return new SubprogramResource($subprogram);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubprogramRequest $request, Subprogram $subprogram)
    {
        $subprogram=$this->service->update($subprogram,$request->validated());
        return new SubprogramResource($subprogram);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subprogram $subprogram)
    {
        $this->service->delete($subprogram);
        return response()->noContent();
    }
}
