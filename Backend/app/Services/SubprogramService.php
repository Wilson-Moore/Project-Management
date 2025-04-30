<?php

namespace App\Services;

use App\Models\Subprogram;

class SubprogramService
{
    public function create_resource(array $data): Subprogram
    {
        return Subprogram::create($data);
    }

    public function update_resource(Subprogram $subprogram, array $data): Subprogram
    {
        $subprogram->update($data);
        return $subprogram->refresh();
    }

    public function delete_resource(Subprogram $subprogram): void
    {
        $subprogram->delete();
    }
}