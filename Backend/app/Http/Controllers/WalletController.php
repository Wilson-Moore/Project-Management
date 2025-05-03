<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use App\Services\WalletService;
use App\Http\Resources\Wallet\WalletResource;
use App\Http\Resources\Wallet\WalletCollection;
use App\Http\Requests\Wallet\ShowWalletRequest;
use App\Http\Requests\Wallet\StoreWalletRequest;
use App\Http\Requests\Wallet\UpdateWalletRequest;

class WalletController extends Controller
{
    public function __construct(
        protected WalletService $service
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new WalletCollection(Wallet::paginate());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWalletRequest $request)
    {
        $wallet=$this->service->create($request->all());
        return (new WalletResource($wallet))->response()->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ShowWalletRequest $request, Wallet $wallet)
    {
        $wallet=$this->service->get($wallet,$request->allowed_includes());
        return new WalletResource($wallet);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWalletRequest $request, Wallet $wallet)
    {
        $wallet=$this->service->update($wallet,$request->validated());
        return new WalletResource($wallet);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wallet $wallet)
    {
        $this->service->delete($wallet);
        return response()->noContent();
    }
}
