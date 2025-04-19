<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\ProgramController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace'=>'App\Http\Controllers'],function(){
    Route::apiResource("wallets",WalletController::class);
    Route::apiResource("programs",ProgramController::class);
});