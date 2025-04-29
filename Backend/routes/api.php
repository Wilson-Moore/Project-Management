<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\SubProgramController;
use App\Http\Controllers\ActionController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\OperationController;
use App\Http\Controllers\ProjectController;

Route::post('/signup',[AuthController::class,'signup']);
Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/logout',[AuthController::class,'logout']);
    Route::get('/user',function (Request $request) {
        return $request->user();
    });
});

Route::group(['namespace'=>'App\Http\Controllers','middleware'=>'auth:sanctum'],function(){
    Route::apiResource("wallets",WalletController::class);
    Route::apiResource("programs",ProgramController::class);
    Route::apiResource("subprograms",SubProgramController::class);
    Route::apiResource("actions",ActionController::class);
    Route::apiResource("operations",OperationController::class);
    Route::apiResource("projects",ProjectController::class);
    Route::apiResource("consultations",ConsultationController::class);
});
