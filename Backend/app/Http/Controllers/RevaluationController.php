<?php

namespace App\Http\Controllers;

use App\Filters\RevaluationFilter;
use App\Http\Requests\Revaluation\StoreRevaluationRequest;
use App\Http\Requests\Revaluation\UpdateRevaluationRequest;
use App\Http\Resources\Revaluation\RevaluationCollection;
use App\Http\Resources\Revaluation\RevaluationResource;
use App\Models\Revaluation;
use App\Services\RevaluationService;
use Illuminate\Http\Request;

class RevaluationController extends Controller
{
    public function __construct(
        protected RevaluationFilter $filter,
        protected RevaluationService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $revaluations=$this->service->all($query_items,$request);
        return new RevaluationCollection($revaluations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRevaluationRequest $request)
    {
        $revaluation=$this->service->create($request->all());
        return (new RevaluationResource($revaluation))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Revaluation $revaluation)
    {
        $revaluation=$this->service->get($revaluation,[]);
        return new RevaluationResource($revaluation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRevaluationRequest $request, Revaluation $revaluation)
    {
        $request->boolean('restore')
        ? $revaluation=$this->service->restore($revaluation)
        : $revaluation=$this->service->update($revaluation,$request->validated());
        return new RevaluationResource($revaluation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Revaluation $revaluation)
    {
        $this->service->delete($revaluation);
        return response()->noContent();
    }
}
