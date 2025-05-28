<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\SubProgramController;
use App\Http\Controllers\ActionController;
use App\Http\Controllers\BlacklistController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\HumanmeanController;
use App\Http\Controllers\MaterialmeanController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\ODSController;
use App\Http\Controllers\OperationController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RevaluationController;

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
    Route::apiResource("consultations",ConsultationController::class);
    Route::apiResource("notices",NoticeController::class);
    Route::apiResource("revaluations",RevaluationController::class);
    Route::apiResource("partners",PartnerController::class);
    Route::apiResource("blacklists",BlacklistController::class);
    Route::apiResource("projects",ProjectController::class);
    Route::apiResource("humanmeans",HumanmeanController::class);
    Route::apiResource("materialmeans",MaterialmeanController::class);
    Route::apiResource("ods",ODSController::class);

    
    Route::prefix('documents/')->group(function () {
        Route::post('{modelType}/{model}',[DocumentController::class,'store']);
        Route::get('{document}/download',[DocumentController::class,'download'])->name('documents.download');
        Route::get('{document}/preview',[DocumentController::class,'preview'])->name('documents.preview');
        Route::delete('{document}',[DocumentController::class,'destroy']);
    });
});
