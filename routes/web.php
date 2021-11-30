<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FormController;
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

Route::post('/login', [LoginController::class, 'login']);
Route::any('/logout', [LoginController::class, 'logout'])->name('logout');
Route::get('/auth', [AuthController::class, 'index']);

Route::prefix('form')->middleware('auth')->group(function () {
    Route::get('{id}/export', [FormController::class, 'export']);
    Route::post('/save-info', [FormController::class, 'storeInfo']);
    Route::post('/validate-info', [FormController::class, 'validateInfo']);
    Route::post('/validate-educations', [FormController::class, 'validateEducations']);
    Route::post('/validate-jobs', [FormController::class, 'validateJobs']);
    Route::post('/validate-kval', [FormController::class, 'validateKval']);
    Route::post('/validate-dop', [FormController::class, 'validateDop']);
});

Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');

