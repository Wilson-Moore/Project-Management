<?php

namespace App\Services;

use App\Models\Action;

class ActionService
{
    public function create_resource(array $data): Action
    {
        return Action::create($data);
    }

    public function update_resource(Action $action, array $data): Action
    {
        $action->update($data);
        return $action->refresh();
    }

    public function delete_resource(Action $action): void
    {
        $action->delete();
    }
}