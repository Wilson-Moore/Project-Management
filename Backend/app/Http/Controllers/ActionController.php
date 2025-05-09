<?php

namespace App\Http\Controllers;

use App\Models\Action;
use Illuminate\Http\Request;
use App\Filters\ActionFilter;
use App\Http\Requests\Action\ShowActionRequest;
use App\Services\ActionService;
use App\Http\Resources\Action\ActionCollection;
use App\Http\Requests\Action\StoreActionRequest;
use App\Http\Requests\Action\UpdateActionRequest;
use App\Http\Resources\Action\ActionResource;

class ActionController extends Controller
{
    public function __construct(
        protected ActionFilter $filter,
        protected ActionService $service
    ) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $actions=$this->service->all($query_items,$request);
        return new ActionCollection($actions);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActionRequest $request)
    {
        $action=$this->service->create($request->all());
        return (new ActionResource($action))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowActionRequest $request, Action $action)
    {
        $action=$this->service->get($action,$request->allowed_includes());
        return new ActionResource($action);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateActionRequest $request, Action $action)
    {
        $request->boolean('restore')
        ? $action=$this->service->restore($action)
        : $action=$this->service->update($action,$request->validated());
        return new ActionResource($action);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Action $action)
    {
        $this->service->delete($action);
        return response()->noContent();
    }
}
