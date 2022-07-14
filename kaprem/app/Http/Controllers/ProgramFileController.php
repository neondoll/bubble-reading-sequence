<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\ProgramFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProgramFileController extends Controller
{
    public function download($id)
    {
        return ProgramFile::download($id);
    }

    public function delete($id)
    {
        ProgramFile::findOrFail($id)->delete();
    }

    /**
     * @throws \Throwable
     */
    public function upload(Request $request)
    {
        return ProgramFile::upload($request);
    }
}
