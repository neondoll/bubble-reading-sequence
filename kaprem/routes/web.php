<?php

use App\Http\Controllers\ActionPlanFilesController;
use App\Http\Controllers\AdminPanel\PermissionsController;
use App\Http\Controllers\AdminPanel\RolesAssignmentController;
use App\Http\Controllers\AdminPanel\RolesController;
use App\Http\Controllers\AmountFundsAndIndicatorsSubsidyController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\ContactsNewController;
use App\Http\Controllers\MiscController;
use App\Http\Controllers\ObjectsController;
use App\Http\Controllers\OrgInfoController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ProgramFileController;
use App\Http\Controllers\SecureController;
use App\Http\Controllers\SubsidyAccessController;
use App\Http\Controllers\SubsidyConclusionController;
use App\Http\Controllers\SubsidyController;
use App\Http\Controllers\SubsidyExpectedResultController;
use App\Http\Controllers\SubsidyFileController;
use App\Http\Controllers\SubsidyNeedJustificationController;
use App\Http\Controllers\SubsidyScheduleEventController;
use App\Http\Controllers\SubsidyScheduleEventFileController;
use App\Http\Controllers\SubsidyStageController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Route::prefix('admin-panel')->middleware(['auth'])->group(function () {
    Route::redirect('/', '/admin-panel/roles-assignment');
    Route::resource('/permissions', PermissionsController::class)->only(['index', 'edit', 'update']);
    Route::resource('/roles', RolesController::class);
    Route::resource('/roles-assignment', RolesAssignmentController::class)->only(['index', 'edit', 'update']);
});

Route::post('/afis/{organization_id}/edit', [AmountFundsAndIndicatorsSubsidyController::class, 'edit']);
Route::get('/auth', [AuthController::class, 'index']);
Route::get('/auth-data', [SecureController::class, 'getRolesAndPermissions']);
Route::get('/error403', [SecureController::class, 'error403']);
Route::get('/get-org-info-columns/{id_org}', [OrgInfoController::class, 'getColumns']);

Route::prefix('kaprem')->middleware(['auth'])->group(function () {
    Route::prefix('object')->group(function () {
        Route::prefix('/action-files')->group(function () {
            Route::post('/approve/{id}', [ActionPlanFilesController::class, 'approve']);
            Route::post('/delete', [ActionPlanFilesController::class, 'deleteFile']);
            Route::post('/download/{id}', [ActionPlanFilesController::class, 'download']);
            Route::post('/save', [ActionPlanFilesController::class, 'saveFile']);
        });

        Route::post('/activities/save', [ObjectsController::class, 'saveActivities']);
        Route::post('/approve', [ObjectsController::class, 'approve']);
        Route::post('/can-user-edit-object', [ObjectsController::class, 'getUserPermissions']);

        Route::prefix('comment')->group(function () {
            Route::get('/all', [CommentsController::class, 'index']);
            Route::post('/delete', [CommentsController::class, 'delete']);
            Route::get('/download/{id}', [CommentsController::class, 'download']);
            Route::post('/save', [CommentsController::class, 'save']);
        });

        Route::post('/create', [ObjectsController::class, 'create']);
        Route::post('/delete/{objectId}', [ObjectsController::class, 'delete']);

        Route::prefix('event')->group(function () {
            Route::post('/delete', [ObjectsController::class, 'deleteEvent']);
            Route::post('/file/delete', [ObjectsController::class, 'deleteEventFile']);
            Route::get('/file/download/{id}', [ObjectsController::class, 'downloadEventFile']);
            Route::post('/save', [ObjectsController::class, 'saveEvent']);
        });

        Route::prefix('file')->group(function () {
            Route::post('/delete', [ObjectsController::class, 'deleteFile']);
            Route::post('/download/{objectId}/{serverFileName}', [ObjectsController::class, 'downloadFile']);
            Route::post('/download-zip', [ObjectsController::class, 'downloadZip']);
            Route::post('/upload', [ObjectsController::class, 'uploadFile']);
        });

        Route::get('/get-object/{objectId}', [ObjectsController::class, 'getObject']);
        Route::get('/get-objects/{programId}', [ObjectsController::class, 'getObjectsByProgram']);
        Route::post('/send-to-realization', [ObjectsController::class, 'sendToRealization']);
        Route::post('/set-date-step', [ObjectsController::class, 'setDateStep']);
        Route::post('/set-dep-status', [ObjectsController::class, 'setDepStatus']);
        Route::post('/set-obj-status', [ObjectsController::class, 'setObjStatus']);
        Route::post('/update/{objectId}', [ObjectsController::class, 'update']);
        Route::post('/update-events/{objectId}', [ObjectsController::class, 'updateEvents']);
        Route::post('/waited/save', [ObjectsController::class, 'saveWaited']);
    });

    Route::prefix('program')->group(function () {
        Route::post('/admin-filters', [ProgramController::class, 'adminFilters']);

        Route::prefix('contacts')->group(function () {
            Route::post('/delete', [ContactsNewController::class, 'delete']);
            Route::post('/save', [ContactsNewController::class, 'save']);
        });

        Route::prefix('file')->group(function () {
            Route::post('/upload', [ProgramFileController::class, 'upload']);
            Route::post('/{id}/delete', [ProgramFileController::class, 'delete']);
            Route::get('/{id}/download', [ProgramFileController::class, 'download']);
        });

        Route::get('/generate', [ProgramController::class, 'generate']);
        Route::post('/reset-program-files', [ProgramController::class, 'resetFiles']);
        Route::post('/{id}/set-sent', [ProgramController::class, 'setSentStatus']);
        Route::get('/{program}/export', [ProgramController::class, 'export']);
    });

    Route::post('/save_info/{org_id}', [OrgInfoController::class, 'saveInfo']);
    Route::post('/{org_id}/programs/{program_id}/contacts/add', [ContactsController::class, 'add']);
    Route::post('/{org_id}/programs/{program_id}/contacts/{id}/delete', [ContactsController::class, 'delete']);
    Route::post('/{org_id}/programs/{program_id}/contacts/{id}/edit', [ContactsController::class, 'edit']);
});

Route::get('/login', function () {
    return view('main');
})->name('login');

Route::prefix('login')->group(function () {
    Route::post('/', [LoginController::class, 'login']);
    Route::get('redirect', function (Request $request) {
        return redirect("/home");
    });
});

Route::any('/logout', [LoginController::class, 'logout'])->name('logout');

Route::prefix('/download')->group(function () {
    Route::get('/manual', [MiscController::class, 'manual']);
    Route::get('/prilozhenie-tipovye-voprosy-nauchnye-organizacii', [MiscController::class, 'prilozhenieTipovyeVoprosyNauchnyeOrganizacii']);
    Route::get('/prilozhenie-tipovye-voprosy-vuzy', [MiscController::class, 'prilozhenieTipovyeVoprosyVuzy']);
});


Route::prefix('/subsidies')->middleware(['auth'])->group(function () {
    Route::prefix('/{code}')->group(function () {
        Route::post('/accesses', [SubsidyAccessController::class, 'sync']);
        Route::post('/add', [SubsidyController::class, 'add']);
        Route::post('/{id}/characteristics/edit', [SubsidyController::class, 'edit']);
        Route::post('/{subsidy_id}/conclusions/add', [SubsidyConclusionController::class, 'add']);
        Route::post('/{id}/delete', [SubsidyController::class, 'delete']);
        Route::post('/{subsidy_id}/expected-results/add', [SubsidyExpectedResultController::class, 'add']);
        Route::post('/{subsidy_id}/expected-results/{id}/delete', [SubsidyExpectedResultController::class, 'delete']);
        Route::post('/{subsidy_id}/expected-results/{id}/edit', [SubsidyExpectedResultController::class, 'edit']);
        Route::post('/{subsidy_id}/files/add', [SubsidyFileController::class, 'add']);
        Route::post('/{subsidy_id}/files/{id}/delete', [SubsidyFileController::class, 'delete']);
        Route::get('/{subsidy_id}/files/{id}/download', [SubsidyFileController::class, 'download']);
        Route::post('/{subsidy_id}/need-justifications/add', [SubsidyNeedJustificationController::class, 'add']);
        Route::post('/{subsidy_id}/need-justifications/{id}/delete', [SubsidyNeedJustificationController::class, 'delete']);
        Route::post('/{subsidy_id}/need-justifications/{id}/edit', [SubsidyNeedJustificationController::class, 'edit']);
        Route::post('/{subsidy_id}/schedule-events/{type}/edit', [SubsidyScheduleEventController::class, 'edit']);
        Route::post('/{subsidy_id}/schedule-events/{type}/files/{subtype}/add', [SubsidyScheduleEventFileController::class, 'add']);
        Route::post('/{subsidy_id}/schedule-events/{type}/files/{subtype}/{id}/delete', [SubsidyScheduleEventFileController::class, 'delete']);
        Route::get('/{subsidy_id}/schedule-events/{type}/files/{subtype}/{id}/download', [SubsidyScheduleEventFileController::class, 'download']);
        Route::post('/{subsidy_id}/schedule-events/{type}/files/{subtype}/{id}/edit', [SubsidyScheduleEventFileController::class, 'edit']);
        Route::post('/{subsidy_id}/schedule-events/{type}/files/{subtype}/{id}/set-accepted-expert', [SubsidyScheduleEventFileController::class, 'setAcceptedExpert']);
        Route::post('/{subsidy_id}/stages/add', [SubsidyStageController::class, 'add']);
        Route::post('/{subsidy_id}/stages/{id}/edit', [SubsidyStageController::class, 'edit']);
        Route::post('/{id}/status/set/{status_id}', [SubsidyController::class, 'setStatus']);
    });
    Route::get('/conclusions/{id}/download', [SubsidyConclusionController::class, 'download']);
});

Route::get('/test', [TestController::class, 'test']);

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');
