<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MiscController extends Controller
{
    public function manual(): StreamedResponse
    {
        return Storage::download('static/manual.pdf');
    }

    /**
     * @return StreamedResponse
     */
    public function prilozhenieTipovyeVoprosyNauchnyeOrganizacii(): StreamedResponse
    {
        return Storage::download('static/prilozhenie-tipovye-voprosy-nauchnye-organizacii.pdf');
    }

    /**
     * @return StreamedResponse
     */
    public function prilozhenieTipovyeVoprosyVuzy(): StreamedResponse
    {
        return Storage::download('static/prilozhenie-tipovye-voprosy-vuzy.pdf');
    }

}
