<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactsNewController extends Controller
{
    public function save(Request $request)
    {
        sleep(2);
        $request->validate([
            'last_name' => ['required', 'string'],
            'name' => ['required', 'string'],
            'middle_name' => ['required', 'string'],
            'role' => ['required', 'numeric'],
            'position' => ['required', 'string'],
            'email' => ['required', 'email'],
            'phone' => ['required', 'string']
        ]);

        $id = $request->query('id');
        Contact::updateOrCreate(
            ['id' => $id],
            array_merge($request->all(), [
                'org_id' => $request->query('org_id'),
                'program_id' => $request->query('program_id'),
            ])
        );
    }

    public function delete(Request $request)
    {
        Contact::findOrFail($request->query('id'))->delete();
    }
}
