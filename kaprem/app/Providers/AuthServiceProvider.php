<?php

namespace App\Providers;

use App\Models\ProgramObject;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define(ability: 'can-edit-object', callback: function (User $user, int $objectId) {
            $object = ProgramObject::find($objectId);

            return $user->org_id === $object->org_id;
        });
        //
    }
}
