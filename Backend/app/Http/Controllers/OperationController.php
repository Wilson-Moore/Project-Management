<?php

namespace App\Http\Controllers;

use App\Models\Operation;
use Illuminate\Http\Request;
use App\Filters\OperationFilter;
use App\Http\Requests\Operation\ShowOperationRequest;
use App\Services\OperationService;
use App\Http\Requests\Operation\StoreOperationRequest;
use App\Http\Requests\Operation\UpdateOperationRequest;
use App\Http\Resources\Operation\OperationCollection;
use App\Http\Resources\Operation\OperationResource;

class OperationController extends Controller
{
    public function __construct(
        protected OperationFilter $filter,
        protected OperationService $service
    ) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $operations=$this->service->all($query_items,$request);
        return new OperationCollection($operations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOperationRequest $request)
    {
        $operation=$this->service->create($request->all());
        return (new OperationResource($operation))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowOperationRequest $request, Operation $operation)
    {
        $operation=$this->service->get($operation,$request->allowed_includes());
        return new OperationResource($operation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOperationRequest $request, Operation $operation)
    {
        $request->boolean('restore')
        ? $operation=$this->service->restore($operation)
        : $operation=$this->service->update($operation,$request->validated());
        return new OperationResource($operation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Operation $operation)
    {
        $this->service->delete($operation);
        return response()->noContent();
    }
}
