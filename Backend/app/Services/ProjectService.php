<?php

namespace App\Services;

use App\Models\Project;

class ProjectService
{
    public function create_resource(array $data): Project
    {
        return Project::create($data);
    }

    public function update_resource(Project $project, array $data): Project
    {
        $project->update($data);
        return $project->refresh();
    }

    public function delete_resource(Project $project): void
    {
        $project->delete();
    }
}