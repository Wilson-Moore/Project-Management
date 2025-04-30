<?php

namespace App\Http\Controllers;

use App\Filters\ConsultationFilter;
use App\Http\Requests\Consultation\StoreConsultationRequest;
use App\Http\Requests\Consultation\UpdateConsultationRequest;
use App\Http\Resources\Consultation\ConsultationCollection;
use App\Http\Resources\Consultation\ConsultationResource;
use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new ConsultationFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new ConsultationCollection(Consultation::paginate());
        } else {
            return new ConsultationCollection(Consultation::where($query_items)->paginate()->appends($request->query()));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConsultationRequest $request)
    {
        return new ConsultationResource(Consultation::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Consultation $consultation)
    {
        return new ConsultationResource($consultation);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateConsultationRequest $request, Consultation $consultation)
    {
        $consultation->update($request->all());
        return new ConsultationResource($consultation->refresh());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Consultation $consultation)
    {
        $consultation->delete();
    }
}
