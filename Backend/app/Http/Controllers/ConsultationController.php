<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consultation;
use App\Filters\ConsultationFilter;
use App\Http\Requests\Consultation\ShowConsultationRequest;
use App\Services\ConsultationService;
use App\Http\Requests\Consultation\StoreConsultationRequest;
use App\Http\Requests\Consultation\UpdateConsultationRequest;
use App\Http\Resources\Consultation\ConsultationCollection;
use App\Http\Resources\Consultation\ConsultationResource;

class ConsultationController extends Controller
{
    public function __construct(
        protected ConsultationFilter $filter,
        protected ConsultationService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $consultations=$this->service->all($query_items,$request);
        return new ConsultationCollection($consultations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConsultationRequest $request)
    {
        $consultation=$this->service->create($request->all());
        return (new ConsultationResource($consultation))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowConsultationRequest $request, Consultation $consultation)
    {
        $consultation=$this->service->get($consultation,$request->allowed_includes());
        return new ConsultationResource($consultation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConsultationRequest $request, Consultation $consultation)
    {
        $consultation=$this->service->update($consultation,$request->validated());
        return new ConsultationResource($consultation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Consultation $consultation)
    {
        $this->service->delete($consultation);
        return response()->noContent();
    }
}
