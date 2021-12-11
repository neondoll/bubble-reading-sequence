<?php

namespace App\Http\Controllers;

use Composer\DependencyResolver\Request;

class GetController extends Controller
{
    public function currentUser(Request $request) {
        return $request->user();
    }
}
