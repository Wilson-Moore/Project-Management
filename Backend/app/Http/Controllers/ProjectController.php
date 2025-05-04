<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
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
    public function show(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
<<<<<<< HEAD
<<<<<<< HEAD
        $project=$this->service->update($project,$request->validated());
=======
        $request->boolean('restore')
        ? $project=$this->service->restore($project)
        : $project=$this->service->update($project,$request->validated());
>>>>>>> master
        return new ProjectResource($project);
=======
        //
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
