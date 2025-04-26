<?php

namespace App\Http\Controllers;

use App\Models\Operation;
use Illuminate\Http\Request;
use App\Filters\OperationFilter;
use App\Http\Requests\Operation\StoreOperationRequest;
use App\Http\Requests\Operation\UpdateOperationRequest;
use App\Http\Resources\Operation\OperationCollection;
use App\Http\Resources\Operation\OperationResource;

class OperationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new OperationFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new OperationCollection(Operation::paginate());
        } else {
            return new OperationCollection(Operation::where($query_items)->paginate()->appends($request->query()));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOperationRequest $request)
    {
        return new OperationResource(Operation::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Operation $operation)
    {
        return new OperationResource($operation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOperationRequest $request, Operation $operation)
    {
        $operation->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Operation $operation)
    {
        $operation->delete();
    }
}
