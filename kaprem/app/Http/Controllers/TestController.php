<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\Program;
use App\Models\ProgramObject;
use DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Shuchkin\SimpleXLSX;
use SplFileInfo;
use ZipArchive;

class TestController extends Controller
{
    public function test()
    {
        die();
        $upload = Organization::selectRaw("
            organizations.id as 'ID организации',
            program_files.created_at as 'Дата загрузки программы организацией',
            objects.id as 'ID объекта',
            objects.name as 'наименование объекта'
        ")
        ->leftJoin('programs', 'programs.org_id', '=', 'organizations.id')
        ->leftJoin('program_files', 'program_files.program_id', '=', 'programs.id')
        ->leftJoin('objects', 'objects.org_id', '=', 'organizations.id')
        ->get();

        dd($upload->toArray());

        // $data = [];
        // foreach ($upload as $raw) {

        //     $data [] = [
        //         ''
        //     ];
        // }



        $upload = Organization::has('program')
            ->with([
                'program' => function ($q) {
                    $q->with([
                        'objects' => function ($q) {
                            $q->with(['events', 'files']);
                        },
                        'file'
                    ]);
                },
            ])
            ->get();

        $programs = Program::selectRaw('
            programs.org_id,
            programs.id,
            program_files.created_at,
            objects.*
        ')
            ->leftJoin('objects', 'objects.program_id', '=', 'programs.id')
            ->leftJoin('program_files', 'program_files.program_id', '=', 'programs.id')
            ->get();

        dd($programs->toArray());

        $data = [];

        foreach ($programs as $program) {
            $data[] = [
                'organization_id' => $program->org_id,
                'program_id' => $program->program_id,
                ''
            ];
        }

        dd($programs->toArray());


        $array = $upload->map(function ($element) {
            return [
                'organization_id' => $element->id,
                'program_date' => $element->file?->created_at,
            ];
        });

        // dd($array);


        echo "<pre>";
        print_r($upload->toArray());
        echo "</pre>";

        // dd($upload->toArray());
    }
}
