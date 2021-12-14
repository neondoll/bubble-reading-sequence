<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SecureController extends Controller
{
    public function currentUser(Request $request)
    {
        $user = $request->user();
        /*return array_merge($user, [
            'roles' => $user?->roles()->with('permissions')->get() ?? ['guest'],
            'permissions' => $user->permissions ?? []
        ]);*/
        return $user;
    }

    public function error403()
    {
        abort(403, 'У вас не достаточно прав.');
    }
}

