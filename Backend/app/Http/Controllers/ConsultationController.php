<?php

namespace App\Http\Controllers;

use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Consultation $consultation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Consultation $consultation)
    {
<<<<<<< HEAD
<<<<<<< HEAD
        $consultation=$this->service->update($consultation,$request->validated());
=======
        $request->boolean('restore')
        ? $consultation=$this->service->restore($consultation)
        : $consultation=$this->service->update($consultation,$request->validated());
>>>>>>> master
        return new ConsultationResource($consultation);
=======
        //
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Consultation $consultation)
    {
        //
    }
}
