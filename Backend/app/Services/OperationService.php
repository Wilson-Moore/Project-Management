<?php

namespace App\Services;

use App\Models\Operation;

class OperationService
{
    public function create_resource(array $data): Operation
    {
        return Operation::create($data);
    }

    public function update_resource(Operation $operation, array $data): Operation
    {
        $operation->update($data);
        return $operation->refresh();
    }

    public function delete_resource(Operation $operation): void
    {
        $operation->delete();
    }
}