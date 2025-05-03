<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

abstract class BaseService
{
    protected Model $model;

    public function all(array $query_items, Request $request): LengthAwarePaginator
    {
        return empty($query_items) ? $this->model->paginate()
        : $this->model->where($query_items)->paginate()->appends($request->query());
    }

    public function create(array $data): Model
    {
        return $this->model->create($data);
    }

    public function get(Model $model, array $includes=[]): Model
    {
        return !empty($includes) ? $model=$model->load($includes) : $model;
    }

    public function update(Model $model, array $data): Model
    {
        $model->update($data);
        return $model->refresh();
    }

    public function delete(Model $model): void
    {
        $model->delete();
    }

    public function find(string $field, mixed $value): ?Model
    {
        return $this->model->where($field,$value)->first();
    }
}