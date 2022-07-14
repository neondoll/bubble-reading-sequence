<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\SubsidyScheduleEvent;
use App\Models\SubsidyScheduleEventFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Throwable;

class SubsidyScheduleEventFileController extends Controller
{
    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @param int $subtype
     * @return mixed
     * @throws Throwable
     */
    public function add(Request $request, string $code, int $subsidy_id, int $type, int $subtype): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $type, $subtype) {
            $file = $request->file('file');
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $event = SubsidyScheduleEvent::whereSubsidyId($subsidy->id)->where('type', $type)->first();
            if ($file) {
                $event_file = SubsidyScheduleEventFile::create([
                    'event_id' => $event->id,
                    'extension' => $file->getClientOriginalExtension(),
                    'is_link' => $form['is_link'],
                    'name' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
                    'size' => $file->getSize(),
                    'subsidy_id' => $subsidy->id,
                    'subtype' => $subtype,
                    'title' => $form['title'],
                    'type' => $type
                ]);
                $file->storeAs("public/subsidies/event-files", "{$event_file->name}_$event_file->id.$event_file->extension");
            } else {
                $event_file = SubsidyScheduleEventFile::create([
                    'event_id' => $event->id,
                    'is_link' => $form['is_link'],
                    'link' => $form['link'],
                    'subsidy_id' => $subsidy->id,
                    'subtype' => $subtype,
                    'title' => $form['title'],
                    'type' => $type
                ]);
            }
            return json_encode(['success' => true, 'item' => $event_file]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @param int $subtype
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function delete(Request $request, string $code, int $subsidy_id, int $type, int $subtype, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $type, $subtype, $id) {
            $file = SubsidyScheduleEventFile::whereId($id)
                ->where('subsidy_id', $subsidy_id)
                ->where('subtype', $subtype)
                ->where('type', $type)->first();
            $file->delete();
            return json_encode(['success' => true]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @param int $subtype
     * @param int $id
     * @return StreamedResponse
     */
    public function download(Request $request, string $code, int $subsidy_id, int $type, int $subtype, int $id): StreamedResponse
    {
        $file = SubsidyScheduleEventFile::whereId($id)
            ->where('subsidy_id', $subsidy_id)
            ->where('subtype', $subtype)
            ->where('type', $type)->first();
        return Storage::download("public/subsidies/event-files/{$file->name}_$file->id.$file->extension", "$file->name.$file->extension");
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @param int $subtype
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function edit(Request $request, string $code, int $subsidy_id, int $type, int $subtype, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $type, $subtype, $id) {
            $file = $request->file('file');
            $form = json_decode($request->post('form'), true);
            $subsidy = Subsidy::whereId($subsidy_id)->where('code', $code)->first();
            $event = SubsidyScheduleEvent::whereSubsidyId($subsidy->id)->where('type', $type)->first();
            if ($file) {
                $event_file = SubsidyScheduleEventFile::updateOrCreate([
                    'event_id' => $event->id,
                    'id' => $id,
                    'subsidy_id' => $subsidy->id,
                    'subtype' => $subtype,
                    'title' => $form['title'],
                    'type' => $type
                ], [
                    'extension' => $file->getClientOriginalExtension(),
                    'is_link' => $form['is_link'],
                    'name' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
                    'size' => $file->getSize()
                ]);
                $file->storeAs("public/subsidies/event-files", "{$event_file->name}_$event_file->id.$event_file->extension");
            } else {
                $event_file = SubsidyScheduleEventFile::updateOrCreate([
                    'event_id' => $event->id,
                    'id' => $id,
                    'subsidy_id' => $subsidy->id,
                    'subtype' => $subtype,
                    'title' => $form['title'],
                    'type' => $type
                ], ['is_link' => $form['is_link'], 'link' => $form['link']]);
            }
            return json_encode(['success' => true, 'item' => $event_file]);
        });
    }

    /**
     * @param Request $request
     * @param string $code
     * @param int $subsidy_id
     * @param int $type
     * @param int $subtype
     * @param int $id
     * @return mixed
     * @throws Throwable
     */
    public function setAcceptedExpert(Request $request, string $code, int $subsidy_id, int $type, int $subtype, int $id): mixed
    {
        return DB::transaction(function () use ($request, $code, $subsidy_id, $type, $subtype, $id) {
            $accepted_expert = json_decode($request->post('accepted_expert'), true);
            $event_file = SubsidyScheduleEventFile::updateOrCreate([
                'id' => $id,
                'subsidy_id' => $subsidy_id,
                'subtype' => $subtype,
                'type' => $type
            ], ['accepted_expert' => $accepted_expert]);
            return json_encode(['success' => true]);
        });
    }
}
