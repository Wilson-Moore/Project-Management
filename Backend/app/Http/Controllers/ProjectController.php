<?php

namespace App\Http\Controllers;

use App\Filters\ProjectFilter;
use App\Http\Requests\Project\StoreProjectRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Http\Resources\Project\ProjectCollection;
use App\Http\Resources\Project\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new ProjectFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new ProjectCollection(Project::paginate());
        } else {
            return new ProjectCollection(Project::where($query_items)->paginate()->appends($request->query()));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        return new ProjectResource(Project::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,Project $project)
    {
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update($request->all());
        return new ProjectResource($project->refresh());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
