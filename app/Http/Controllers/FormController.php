<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\FormExportHelper;
use App\Http\Requests\FormDopRequest;
use App\Http\Requests\FormEducationRequest;
use App\Http\Requests\FormInfoRequest;
use App\Http\Requests\FormJobsRequest;
use App\Http\Requests\FormKvalRequest;
use App\Http\Requests\FormRequest;
use App\Models\CommonOrg;
use App\Models\ComputerSkill;
use App\Models\Dpo;
use App\Models\Education;
use App\Models\Form;
use App\Models\GosTainy;
use App\Models\JobHistory;
use App\Models\Language;
use Illuminate\Http\JsonResponse;
use PhpOffice\PhpWord\Exception\CopyFileException;
use PhpOffice\PhpWord\Exception\CreateTemporaryFileException;
use PhpOffice\PhpWord\Exception\Exception;


class FormController extends Controller
{
    public function validateInfo(FormInfoRequest $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }

    public function validateEducations(FormEducationRequest $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }

    public function validateJobs(FormJobsRequest $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }

    public function validateKval(FormKvalRequest $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }

    public function validateDop(FormDopRequest $request): JsonResponse
    {
        return response()->json(['success' => true]);
    }

    public function storeInfo(FormRequest $request): JsonResponse
    {
        $id = $request->query('id');
        $request->merge([
            'job_org_min' => $request->get('job_org_min') ? 1 : 0
        ]);
        $where = $id ? $request->all() : array_merge($request->all(), ['user_id' => $request->user()->id]);

        $model = Form::updateOrCreate(['id' => $id], $where);

        $request->collect('language')->each(function ($language) use ($model) {
            $where = [
                'id' => $language['id'],
                'form_id' => $model->id,
                'name' => $language['name'],
                'level' => $language['level']
            ];
            Language::updateOrCreate($where);
        });

        $request->collect('computer_skills')->each(function ($computer_skill) use ($model) {
            $where = [
                'id' => $computer_skill['id'],
                'form_id' => $model->id,
                'name' => $computer_skill['name'],
                'level' => $computer_skill['level'],
                'type' => $computer_skill['type']
            ];
            ComputerSkill::updateOrCreate($where);
        });

        $request->collect('education')->each(function ($education) use ($model) {
            $where = [
                'id' => $education['id'],
                'form_id' => $model->id,
                'org' => $education['org'],
                'start_year' => $education['start_year'],
                'end_year' => $education['end_year'],
                'speciality' => $education['speciality'],
                'diplom' => $education['diplom'],
            ];
            Education::updateOrCreate($where);
        });

        $request->collect('dpo')->each(function ($dpo) use ($model) {
            $where = [
                'id' => $dpo['id'],
                'form_id' => $model->id,
                'education_program' => $dpo['education_program'],
                'org' => $dpo['org'],
                'end_year' => $dpo['end_year'],
                'hours' => $dpo['hours'],
                'category' => $dpo['category'],
            ];
            Dpo::updateOrCreate($where);
        });

        $request->collect('common_org')->each(function ($common_org) use ($model) {
            $where = [
                'id' => $common_org['id'],
                'form_id' => $model->id,
                'position' => $common_org['position'],
                'years' => $common_org['years'],
                'locality' => $common_org['locality'],
                'org' => $common_org['org'],
                'org_goal' => $common_org['org_goal'],
                'role' => $common_org['role'],
            ];
            CommonOrg::updateOrCreate($where);
        });

        $request->collect('job_history')->each(function ($job_history) use ($model) {
            $where = [
                'id' => $job_history['id'],
                'form_id' => $model->id,
                'start_year' => $job_history['start_year'],
                'end_year' => $job_history['end_year'],
                'short_name' => $job_history['short_name'],
                'org_name' => $job_history['org_name'],
                'org_place' => $job_history['org_place'],
                'position' => $job_history['position'],
                'awards' => $job_history['awards'],
            ];
            JobHistory::updateOrCreate($where);
        });

        $request->collect('gos_tainy')->each(function ($gos_tainy) use ($model) {
            $where = [
                'id' => $gos_tainy['id'],
                'form_id' => $model->id,
                'form' => $gos_tainy['form'],
                'org' => $gos_tainy['org'],
                'number' => $gos_tainy['number'],
                'job_date' => $gos_tainy['job_date'],
            ];
            GosTainy::updateOrCreate($where);
        });

        return response()->json(['success' => $model !== null, 'id' => $model->id]);
    }


    /**
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     * @throws Exception
     */
    public function export($id): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        $form = Form::where('id', $id)->first();

        $export = new FormExportHelper();

        return response()->download($export->generate($form), 'Заявка.docx')->deleteFileAfterSend(true);
    }
}
