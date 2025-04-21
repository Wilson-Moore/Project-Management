<?php

namespace App\Http\Controllers;

use App\Models\Action;
use Illuminate\Http\Request;
use App\Filters\ActionFilter;
use App\Http\Resources\Action\ActionCollection;
use App\Http\Requests\Action\StoreActionRequest;
use App\Http\Requests\Action\UpdateActionRequest;
use App\Http\Resources\Action\ActionResource;

class ActionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter=new ActionFilter();
        $query_items=$filter->transform($request);
        if (count($query_items)==0) {
            return new ActionCollection(Action::paginate());
        } else {
            return new ActionCollection(Action::where($query_items)->paginate()->appends($request->query()));
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreActionRequest $request)
    {
        $code=$request->input('code');
        $action=Action::create([
            'code'=>$code,
            'type'=>substr($code,8,1),
            'subprogram_code'=>substr($code,6,2)]);
        return new ActionResource($action);
    }

    /**
     * Display the specified resource.
     */
    public function show(Action $action)
    {
        return new ActionResource($action);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateActionRequest $request, Action $action)
    {
        $action->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Action $action)
    {
        $action->delete();
    }
}
