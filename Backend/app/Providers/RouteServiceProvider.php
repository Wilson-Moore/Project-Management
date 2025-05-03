<?php

namespace App\Providers;

use App\Models\Action;
use App\Models\Consultation;
use App\Models\Operation;
use App\Models\Program;
use App\Models\Project;
use App\Models\Subprogram;
use App\Models\Wallet;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Route::bind('wallet', function ($value) {
            return Wallet::withTrashed()->findOrFail($value);
        });
        Route::bind('program', function ($value) {
            return Program::withTrashed()->findOrFail($value);
        });
        Route::bind('subprogram', function ($value) {
            return Subprogram::withTrashed()->findOrFail($value);
        });
        Route::bind('action', function ($value) {
            return Action::withTrashed()->findOrFail($value);
        });
        Route::bind('operation', function ($value) {
            return Operation::withTrashed()->findOrFail($value);
        });
        Route::bind('project', function ($value) {
            return Project::withTrashed()->findOrFail($value);
        });
        Route::bind('consultation', function ($value) {
            return Consultation::withTrashed()->findOrFail($value);
        });
    }
}
