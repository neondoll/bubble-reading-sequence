<?php

namespace App\Console\Commands;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class rbac extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rbac';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'rbac generate';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $admin = Role::updateOrCreate(['name' => 'admin'], [
            'display_name' => 'admin',
            'description' => 'full admin',
        ]);

        $user = Role::updateOrCreate(['name' => 'user'], [
            'display_name' => 'user',
            'description' => 'simple user',
        ]);

        $mon = Role::updateOrCreate(['name' => 'mon'], [
            'display_name' => 'mon',
            'description' => 'user of mon',
        ]);

        $mgsu = Role::updateOrCreate(['name' => 'mgsu'], [
            'display_name' => 'mgsu',
            'description' => 'user of mgsu',
        ]);

        /* $createForm = Permission::updateOrCreate([
             'name' => 'create-form',
             'display_name' => 'create-form',
             'description' => 'create-form',
         ]);

         $viewForm = Permission::updateOrCreate([
             'name' => 'view-form',
             'display_name' => 'view-form',
             'description' => 'view-form',
         ]);

         $updateForm = Permission::updateOrCreate([
             'name' => 'update-form',
             'display_name' => 'update-form',
             'description' => 'update-form',
         ]);

         $deleteForm = Permission::updateOrCreate([
             'name' => 'delete-form',
             'display_name' => 'delete-form',
             'description' => 'delete-form',
         ]);

         $setStatusForm = Permission::updateOrCreate([
             'name' => 'set-status-form',
             'display_name' => 'set-status-form',
             'description' => 'set-status-form',
         ]);

         $getAllForms = Permission::updateOrCreate([
             'name' => 'get-all-forms',
             'display_name' => 'get-all-forms',
             'description' => 'get-all-forms',
         ]);


         $admin->syncPermissions([$createForm, $updateForm, $deleteForm, $viewForm, $setStatusForm, $getAllForms]);
         $mon->syncPermissions([$setStatusForm, $getAllForms, $viewForm]);
         $user->syncPermissions([$createForm, $updateForm, $deleteForm, $setStatusForm, $viewForm]);
 */
      /*  $userModel = User::whereEmail('user@admin.ru')->first();
        $userModel->syncRoles([$user->id]);

        $userModel = User::whereEmail('mgsu@admin.ru')->first();
        $userModel->syncRoles([$mgsu->id]);*/

        /*  $userModel = User::whereEmail('user@admin.ru')->first();
          $userModel->syncRoles([$user->id]);*/

        return CommandAlias::SUCCESS;
    }
}
