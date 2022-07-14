<?php

namespace App\Http\Controllers\AdminPanel;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;

class PermissionsController
{
    protected mixed $permissionModel;

    public function __construct()
    {
        $this->permissionModel = Config::get('laratrust.models.permission');
    }

    public function index(): \Illuminate\Contracts\View\View
    {
        return View::make('admin_panel.permissions.index', [
            'permissions' => $this->permissionModel::simplePaginate(10),
        ]);
    }

    public function edit($id): \Illuminate\Contracts\View\View
    {
        $permission = $this->permissionModel::findOrFail($id);

        return View::make('admin_panel.edit', [
            'model' => $permission,
            'type' => 'permission',
        ]);
    }

    public function update(
        Request $request,
        $id
    ): \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse {
        $permission = $this->permissionModel::findOrFail($id);

        $data = $request->validate([
            'display_name' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $permission->update($data);

        Session::flash('laratrust-success', 'Permission updated successfully');
        return redirect(route('permissions.index'));
    }
}
