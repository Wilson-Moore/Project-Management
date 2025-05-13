<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;
use App\Filters\PartnerFilter;
use App\Http\Requests\Partner\ShowPartnerRequest;
use App\Services\PartnerService;
use App\Http\Requests\Partner\StorePartnerRequest;
use App\Http\Requests\Partner\UpdatePartnerRequest;
use App\Http\Resources\Partner\PartnerCollection;
use App\Http\Resources\Partner\PartnerResource;

class PartnerController extends Controller
{
    public function __construct(
        protected PartnerFilter $filter,
        protected PartnerService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $partners=$this->service->all($query_items,$request);
        return new PartnerCollection($partners);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePartnerRequest $request)
    {
        $partner=$this->service->create($request->all());
        return (new PartnerResource($partner))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowPartnerRequest $request, Partner $partner)
    {
        $partner=$this->service->get($partner,$request->allowed_includes());
        return new PartnerResource($partner);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePartnerRequest $request, Partner $partner)
    {
        $request->boolean('restore')
        ? $partner=$this->service->restore($partner)
        : $partner=$this->service->update($partner,$request->validated());
        return new PartnerResource($partner);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Partner $partner)
    {
        $this->service->delete($partner);
        return response()->noContent();
    }
}
