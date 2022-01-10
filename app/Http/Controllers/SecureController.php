<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JetBrains\PhpStorm\ArrayShape;

class SecureController extends Controller
{
    public function error403()
    {
        abort(403, 'У вас не достаточно прав.');
    }

    #[ArrayShape([
        'auth_key' => "mixed",
        'email' => "mixed",
        'permissions' => "mixed",
        'roles' => "mixed"
    ])] public function getRolesAndPermissions(Request $request): array
    {
        $user = $request->user();
        return [
            'auth_key' => $user->auth_key,
            'email' => $user->email,
            'permissions' => $user->allPermissions() ?? [],
            'roles' => $user->roles()->get() ?? ['guest']
        ];
    }
}
