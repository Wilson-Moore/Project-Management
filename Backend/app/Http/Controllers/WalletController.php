<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use App\Http\Resources\Wallet\WalletResource;
use App\Http\Resources\Wallet\WalletCollection;
use App\Http\Requests\Wallet\StoreWalletRequest;
use App\Http\Requests\Wallet\UpdateWalletRequest;

class WalletController extends Controller
{
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
        return new WalletResource(Wallet::create($request->all()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,Wallet $wallet)
    {
        if ($request->query('include_programs')) {
            $wallet=$wallet->load('programs');
        }
        return new WalletResource($wallet);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWalletRequest $request, Wallet $wallet)
    {
<<<<<<< HEAD
<<<<<<< HEAD
        $wallet=$this->service->update($wallet,$request->validated());
=======
        $request->boolean('restore')
        ? $wallet=$this->service->restore($wallet)
        : $wallet=$this->service->update($wallet,$request->validated());
>>>>>>> master
        return new WalletResource($wallet);
=======
        $wallet->update($request->all());
>>>>>>> parent of e76d091 (A realy large Commit with various changes :D)
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wallet $wallet)
    {
        $wallet->delete();
    }
}
