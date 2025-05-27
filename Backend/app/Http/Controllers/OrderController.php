<?php

namespace App\Http\Controllers;

use App\Filters\OrderFilter;
use App\Http\Requests\Order\ShowOrderRequest;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Http\Requests\Order\UpdateOrderRequest;
use App\Http\Resources\Order\OrderCollection;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function __construct(
        protected OrderFilter $filter,
        protected OrderService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query_items=$this->filter->transform($request);
        $orders=$this->service->all($query_items,$request);
        return new OrderCollection($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $order=$this->service->create($request->all());
        return (new OrderResource($order))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowOrderRequest $request, Order $order)
    {
        $order=$this->service->get($order,$request->allowed_includes());
        return new OrderResource($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $request->boolean('restore')
        ? $order=$this->service->restore($order)
        : $order=$this->service->update($order,$request->validated());
        return new OrderResource($order);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $this->service->delete($order);
        return response()->noContent();
    }
}
