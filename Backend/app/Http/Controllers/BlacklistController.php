<?php

namespace App\Http\Controllers;

use App\Filters\BlacklistFilter;
use App\Http\Requests\Blacklist\ShowBlacklistRequest;
use App\Http\Requests\Blacklist\StoreBlacklistRequest;
use App\Http\Requests\Blacklist\UpdateBlacklistRequest;
use App\Http\Resources\Blacklist\BlacklistCollection;
use App\Http\Resources\Blacklist\BlacklistResource;
use App\Models\Blacklist;
use App\Services\BlacklistService;
use Illuminate\Http\Request;

class BlacklistController extends Controller
{
    public function __construct(
        protected BlacklistFilter $filter,
        protected BlacklistService $service
    ) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $blacklists=$this->service->all($query_items,$request);
        return new BlacklistCollection($blacklists);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlacklistRequest $request)
    {
        $blacklist=$this->service->create($request->all());
        return (new BlacklistResource($blacklist))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowBlacklistRequest $request, Blacklist $blacklist)
    {
        $blacklist=$this->service->get($blacklist,$request->allowed_includes());
        return new BlacklistResource($blacklist);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlacklistRequest $request, Blacklist $blacklist)
    {
        $blacklist=$this->service->update($blacklist,$request->validated());
        return new BlacklistResource($blacklist);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blacklist $blacklist)
    {
        $this->service->delete($blacklist);
        return response()->noContent();
    }
}
