<?php

namespace App\Http\Controllers;

use App\Filters\NoticeFilter;
use App\Http\Requests\Notice\ShowNoticeRequest;
use App\Http\Requests\Notice\StoreNoticeRequest;
use App\Http\Requests\Notice\UpdateNoticeRequest;
use App\Http\Resources\Notice\NoticeCollection;
use App\Http\Resources\Notice\NoticeResource;
use App\Models\Notice;
use App\Services\NoticeService;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function __construct(
        protected NoticeFilter $filter,
        protected NoticeService $service
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $notices=$this->service->all($query_items,$request);
        return new NoticeCollection($notices);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNoticeRequest $request)
    {
        $notice=$this->service->create($request->all());
        return (new NoticeResource($notice))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowNoticeRequest $request,Notice $notice)
    {
        $notice=$this->service->get($notice,$request->allowed_includes());
        return new NoticeResource($notice);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNoticeRequest $request, Notice $notice)
    {
        $request->boolean('restore')
        ? $notice=$this->service->restore($notice)
        : $notice=$this->service->update($notice,$request->validated());
        return new NoticeResource($notice);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notice $notice)
    {
        $this->service->delete($notice);
        return response()->noContent();
    }
}
