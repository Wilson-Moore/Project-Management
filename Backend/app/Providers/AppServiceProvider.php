<?php

namespace App\Providers;

use App\Models\Action;
use App\Models\Consultation;
use App\Models\Notice;
use App\Models\Operation;
use App\Models\Partner;
use App\Models\Program;
use App\Models\Project;
use App\Models\Revaluation;
use App\Models\Subprogram;
use App\Models\Wallet;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
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
        Route::bind('consultation', function ($value) {
            return Consultation::withTrashed()->findOrFail($value);
        });
        Route::bind('notice', function ($value) {
            return Notice::withTrashed()->findOrFail($value);
        });
        Route::bind('revaluation', function ($value) {
            return Revaluation::withTrashed()->findOrFail($value);
        });
        Route::bind('partner', function ($value) {
            return Partner::withTrashed()->findOrFail($value);
        });
        Route::bind('project', function ($value) {
            return Project::withTrashed()->findOrFail($value);
        });
    }
}
