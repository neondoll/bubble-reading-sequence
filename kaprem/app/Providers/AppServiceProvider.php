<?php

namespace App\Providers;

use App\Helpers\Classes\ObjectConstructor;
use App\Helpers\Classes\ObjectMutators\ObjectDocumentMutator;
use App\Helpers\Classes\ObjectMutators\ObjectEventMutator;
use App\Helpers\Classes\ObjectMutators\ObjectMutator;
use App\Helpers\Classes\ObjectMutators\ObjectStatusMutator;
use App\Helpers\Classes\ObjectService;
use App\Helpers\Interfaces\ObjectConstructorContract;
use App\Helpers\Interfaces\ObjectDocumentMutatorContract;
use App\Helpers\Interfaces\ObjectEventMutatorContract;
use App\Helpers\Interfaces\ObjectMutatorContract;
use App\Helpers\Interfaces\ObjectStatusMutatorContract;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(IdeHelperServiceProvider::class);
        }

        
        //TODO: вынести это все в ObjectServiceProvider
        $this->app->bind(ObjectConstructorContract::class, function() {
            return new ObjectConstructor();
        });
        $this->app->bind(ObjectMutatorContract::class, function() {
            return new ObjectMutator();
        });
        $this->app->bind(ObjectEventMutatorContract::class, function() {
            return new ObjectEventMutator();
        });
        $this->app->bind(ObjectStatusMutatorContract::class, function() {
            return new ObjectStatusMutator();
        });
        $this->app->bind(ObjectDocumentMutatorContract::class, function() {
            return new ObjectDocumentMutator();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
