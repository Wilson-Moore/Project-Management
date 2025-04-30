<?php

namespace App\Services;

use App\Models\Program;

class ProgramService
{
    public function create_resource(array $data): Program
    {
        return Program::create($data);
    }

    public function update_resource(Program $program, array $data): Program
    {
        $program->update($data);
        return $program->refresh();
    }

    public function delete_resource(Program $program): void
    {
        $program->delete();
    }
}