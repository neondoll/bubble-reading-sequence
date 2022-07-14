<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\Statuses\MgsuStatus;
use App\Models\FileList;
use App\Models\Program;
use App\Models\ProgramFile;
use Illuminate\Http\Request;
use PDF;

class ProgramController extends Controller
{
    public function setSentStatus($id)
    {
        $program = Program::findOrFail($id);
        foreach ($program->objects as $object) {
            $object->status->update(['is_approved_by_user' => true]);
        }
        return $program->update(['sent' => 1]);
    }

    public function export(Program $program)
    {
        ini_set('max_execution_time', 200);
        $objects = $program->objects;

        $data = [
            'org' => $program->org,
            'program' => $program,
            'orgInfo' => $program->org_info,
            'usersInfo' => $program->contacts,
            'userInfo' => (function () use ($program) {
                $contact = $program->contacts[0] ?? null;
                if ($contact) {
                    $contact = "{$contact->name} {$contact->position} {$contact->phone} {$contact->email}";
                }
                return $contact ?? '-';
            })(),
            'objects' => $objects,
            'priorityObjects' => $program->priorityObjects,
            'reservedObjects' => $program->reservedObjects,
            'fileList' => FileList::where('type', (int)$program->org->isNauch())->get()
        ];

        $pdf = PDF::loadView(view: 'pdfExport', data: $data);

        return response($pdf->stream('Программа Модернизации.pdf'), 200, ['Cache-Control' => 'no-cache, must-revalidate']);
    }

    public function adminFilters(Request $request)
    {
        $page = $request->post('page');
        $first = $request->post('first');
        $offset = ($page - 1) * $first;
        $type = $request->post('type');
        $filters = json_decode($request->post('filters'), true);

        $query = Program::query();

        if ($type == 'vus') {
            $query->whereHas('org', function ($q) {
                return $q->whereNotIn('type_id', [7, 9, 10])->where(['founder_id' => 1, 'system_status' => 1]);
            });
        } else {
            $query->whereHas('org', function ($q) {
                return $q->whereIn('type_id', [7, 9, 10])->where(['founder_id' => 1, 'system_status' => 1]);
            });
        }

        if ($filters['id'])
            $query->whereHas('org', fn ($q) => $q->where('id', $filters['id']));

        if ($filters['organization'])
            $query->whereHas('org', fn ($q) => $q->where('name', 'like', "%{$filters['organization']}%"));

        if ($filters['region'])
            $query->whereHas(
                'org',
                fn ($q) => $q->whereHas(
                    'region',
                    fn ($qRegion) => $qRegion->where('region', 'like', "%{$filters['region']}%")
                )
            );

        // Дада, $filters['sent'] === false здесь не просто так)
        if ($filters['sent'] === true)
            $query->where('sent', '=', 1);
        else if ($filters['sent'] === false) {
            $query->where('sent', '=', 0);
        }


        // Дада, и здесь тоже
        if ($filters['pdf'] === true) {
            $query->with('file')->has('file');
        } else if ($filters['pdf'] === false) {
            $query->with('file')->has('file', '=', 0);
        }


        if ($filters['objectOrderCount'])
            $query->withCount('objects')->orderBy('objects_count', $filters['objectOrderCount']);

        $paginatorInfo = [
            'count' => $query->count(),
            'page' => $page
        ];

        //Нужно для вывода всех записей
        if ($first !== -1)
            $query->limit($first)->offset($offset);

        $data = $query->get()->map(function ($item) {
            return [
                'org_id' => $item->org_id,
                'org_name' => $item->org->name,
                'region' => $item->org->region?->region,
                'file' => $item->file,
                'sent' => $item->sent,
                'inn' => $item->org->inn
            ];
        });

        return [
            'data' => $data,
            'paginatorInfo' => $paginatorInfo
        ];
    }

    public function resetFiles(Request $request)
    {
        $programId = $request->post('programId');
        Program::find($programId)->update(['sent' => 0]);
        $file = ProgramFile::where('program_id', $programId)->first();
        $path = storage_path("app/public/program/{$programId}/{$file->server_name}");
        $file->delete();
        if (file_exists($path))
            unlink($path);
    }
}
