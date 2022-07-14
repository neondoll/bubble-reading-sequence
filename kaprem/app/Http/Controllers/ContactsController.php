<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Psy\Util\Json;

class ContactsController extends Controller
{
    public function add(Request $request)
    {
        $contact = Contact::create(
            array_merge(self::preparingTheFormForSaving($request->post('form')), [
                'org_id' => $request->route('org_id'),
                'program_id' => $request->route('program_id')
            ])
        );

        return response()->json($contact);
    }

    public function delete(Request $request)
    {
        $contact = Contact::where([
            'id' => $request->route('id'),
            'org_id' => $request->route('org_id'),
            'program_id' => $request->route('program_id')
        ])?->delete();
        //Json::encode($contact->delete());
    }

    public function edit(Request $request)
    {
        $contact = Contact::updateOrCreate([
            'id' => $request->route('id')
        ], self::preparingTheFormForSaving($request->post('form')));
        return response()->json($contact);
    }

    private static function preparingTheFormForSaving($form)
    {
        $form = json_decode($form, true);
        // dd($form);
        $fio = explode(' ', $form['fio']);
        $form['last_name'] = $fio[0] ?? '-';
        $form['name'] = $fio[1] ?? '-';
        $form['middle_name'] = $fio[2] ?? '-';
        unset($form['fio']);
        return $form;
    }
}
