<?php

namespace App\Http\Controllers;

use App\Filters\MaterialmeanFilter;
use App\Http\Requests\Materialmean\ShowMaterialmeanRequest;
use App\Http\Requests\Materialmean\StoreMaterialmeanRequest;
use App\Http\Requests\Materialmean\UpdateMaterialmeanRequest;
use App\Http\Resources\Materialmean\MaterialmeanCollection;
use App\Http\Resources\Materialmean\MaterialmeanResource;
use App\Models\Materialmean;
use App\Services\MaterialmeanService;
use Illuminate\Http\Request;

class MaterialmeanController extends Controller
{
    public function __construct(
        protected MaterialmeanFilter $filter,
        protected MaterialmeanService $service
    ) {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $materialmeans=$this->service->all($query_items,$request);
        return new MaterialmeanCollection($materialmeans);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMaterialmeanRequest $request)
    {
        $materialmean=$this->service->create($request->all());
        return (new MaterialmeanResource($materialmean))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowMaterialmeanRequest $request, Materialmean $materialmean)
    {
        $materialmean=$this->service->get($materialmean,$request->allowed_includes());
        return new MaterialmeanResource($materialmean);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMaterialmeanRequest $request, Materialmean $materialmean)
    {
        $materialmean=$this->service->update($materialmean,$request->validated());
        return new MaterialmeanResource($materialmean);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Materialmean $materialmean)
    {
        $this->service->delete($materialmean);
        return response()->noContent();
    }
}
