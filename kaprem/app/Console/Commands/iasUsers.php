<?php

namespace App\Console\Commands;

use App\Helpers\Classes\jwt\jwt;
use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Lcobucci\JWT\Configuration;

class iasUsers extends Command
{
    use jwt;

    public Configuration $conf;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reference:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->init();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $token = $this
            ->conf
            ->builder()
            ->withClaim('reference', 'all_user')
            ->getToken($this->conf->signer(), $this->conf->signingKey());

        $resp_token = file_get_contents(
            "https://api.xn--80apneeq.xn--p1ai/api.php?option=reference_api&action=get_reference&module=constructor&reference_token={$token->toString()}");
        $token = $this
            ->conf
            ->parser()
            ->parse($resp_token);


        $constraints = $this->conf->validationConstraints();


        if (!$this->conf->validator()->validate($token, ...$constraints)) {
            return 'Error with token validate';
        }

        $data = $token->claims();

        foreach ($data->all() as $item) {
            $name = explode(' ', $item['name']);
            $name2 = $name[1] ?? '';
            $lName = $name[0] ?? '';
            $mName = $name[2] ?? '';
            $user = User::updateOrCreate(
                [
                    'email' => $item['login']
                ],
                [
                    'name' => $name2,
                    'lastName' => $lName,
                    'middleName' => $mName,
                    //'region_id' => $request->input('region'),
                    //'city' => $request->input('city'),
                    //'job_abr' => $request->input('job_place'),
                    //'job_place' => $request->input('job_place'),
                    //'position' => $request->input('position'),
                    //'phone' => $request->input('phone'),
                    'email_verified_at'=>date('Y-f-d H:m:s'),
                    'password' => Hash::make($item['pwd']),
                ]);
            $this->info(serialize([
                'email' => $item['login'],
                'name' => $name2,
                'lastName' => $lName,
                'middleName' => $mName,
                //'region_id' => $request->input('region'),
                //'city' => $request->input('city'),
                //'job_abr' => $request->input('job_place'),
                //'job_place' => $request->input('job_place'),
                //'position' => $request->input('position'),
                //'phone' => $request->input('phone'),
                'password' => Hash::make($item['pwd']),
            ]));
            $userR = Role::where('name', 'user')->first();
            $user->syncRoles([$userR]);
            //Auth::login($user);
            /*$f = User::findOne(['username' => $item->login]) ?? new User();
            $f->id_org = $item->podved_id;
            $f->name = $item->name;
            $f->username = $f->email = $item->login;
            $f->setPassword($item->pwd);
            $f->generateAuthKey();
            $f->created_at = $f->updated_at = time();
            if (!$f->save()) {
                print_r(array_merge($f->errors, [$f->username, $f->password]));
            }*/
        }
        // Http::get('')
        return 0;
    }
}
