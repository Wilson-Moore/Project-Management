<?php

namespace App\Http\Controllers;

use App\Filters\ProjectFilter;
use App\Http\Requests\Project\ShowProjectRequest;
use App\Http\Requests\Project\StoreProjectRequest;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Http\Resources\Project\ProjectCollection;
use App\Http\Resources\Project\ProjectResource;
use App\Models\Project;
use App\Services\ProjectService;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function __construct(
        protected ProjectFilter $filter,
        protected ProjectService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        
        $projects=empty($query_items)
        ? Project::paginate()
        : Project::where($query_items)->paginate()->appends($request->query());

        return new ProjectCollection($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $project=$this->service->create($request->all());
        return (new ProjectResource($project))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowProjectRequest $request, Project $project)
    {
        $with=$request->allowed_includes();
        if (!empty($with)) {
            $project=$project->load($with);
        }
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project=$this->service->update($project,$request->validated());
        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $this->service->delete($project);
        return response()->noContent();
    }
}
