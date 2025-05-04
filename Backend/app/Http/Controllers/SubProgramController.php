<?php

namespace App\Http\Controllers;

use App\Models\Subprogram;
use App\Filters\SubprogramFilter;
use App\Http\Requests\Subprogram\ShowSubprogramRequest;
use Illuminate\Http\Request;
use App\Http\Resources\Subprogram\SubprogramResource;
use App\Http\Resources\Subprogram\SubprogramCollection;
use App\Http\Requests\Subprogram\StoreSubprogramRequest;
use App\Http\Requests\Subprogram\UpdateSubprogramRequest;
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
        $subprograms=$this->service->all($query_items,$request);
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
    public function show(ShowSubprogramRequest $request, Subprogram $subprogram)
    {
        $subprogram=$this->service->get($subprogram,$request->allowed_includes());
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
