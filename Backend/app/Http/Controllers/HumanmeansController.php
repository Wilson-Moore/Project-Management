<?php

namespace App\Http\Controllers;

use App\Filters\HumanmeanFilter;
use App\Http\Requests\Humanmean\ShowHumanmeanRequest;
use App\Http\Requests\Humanmean\StoreHumanmeanRequest;
use App\Http\Requests\Humanmean\UpdateHumanmeanRequest;
use App\Http\Resources\Humanmean\HumanmeanCollection;
use App\Http\Resources\Humanmean\HumanmeanResource;
use App\Models\Humanmean;
use App\Services\HumanmeanService;
use Illuminate\Http\Request;

class HumanmeansController extends Controller
{
    public function __construct(
        protected HumanmeanFilter $filter,
        protected HumanmeanService $service
    ) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $humanmeans=$this->service->all($query_items,$request);
        return new HumanmeanCollection($humanmeans);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHumanmeanRequest $request)
    {
        $humanmean=$this->service->create($request->all());
        return (new HumanmeanResource($humanmean))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowHumanmeanRequest $request, Humanmean $humanmean)
    {
        $humanmean=$this->service->get($humanmean,$request->allowed_includes());
        return new HumanmeanResource($humanmean);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHumanmeanRequest $request, Humanmean $humanmean)
    {
        $humanmean=$this->service->update($humanmean,$request->validated());
        return new HumanmeanResource($humanmean);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Humanmean $humanmean)
    {
        $this->service->delete($humanmean);
        return response()->noContent();
    }
}
