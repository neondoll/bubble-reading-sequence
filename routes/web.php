<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/auth', [AuthController::class, 'index']);
Route::post('/login', [LoginController::class, 'login']);
Route::any('/logout', [LoginController::class, 'logout'])->name('logout');

Route::prefix('/api')->middleware('auth')->group(function () {
    Route::post('/estate', [ApiController::class, 'estate']);
    Route::post('/iasmon', [ApiController::class, 'iasmon']);
});


Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');

