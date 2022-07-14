<?php

namespace App\Console\Commands;

use App\Helpers\Classes\jwt\jwt;
use App\Models\Organization;
use App\Models\Region;
use App\Models\Role;
use App\Models\User;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class reference extends Command
{
    use jwt;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reference {type}';

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
        //dd($this->argument('type'));
        switch ($this->argument('type')) {
            case 'all':
            {
                $this->regions();
                $this->orgs();
                $this->users();
                break;
            }
            case 'regions':
            {
                $this->regions();
                break;
            }
            case 'orgs':
            {
                $this->regions();
                $this->orgs();
                break;
            }
            case 'users':
            {
                $this->users();
                break;
            }
            default:
            {
                $this->error("Не верный аргумент {type}\nДоступные: all, regions, orgs, users");
            }
        }
        return 0;
    }

    private function users()
    {
        $response = Http::post('https://api-ias.xn--80apneeq.xn--p1ai/graphql', [
            'query' => '{users(first: 11000){data{id,login,pwd,podved_id,name}}}'
        ]);

        $users = $response->json()['data']['users']['data'];

        foreach ($users as $user) {
            if (!$user['pwd'] || !Organization::whereId($user['podved_id'])->first()) {
                continue;
            }
            $usr = User::updateOrCreate(['email' => $user['login']], [
                'email' => $user['login'],
                'name' => $user['name'],
                'org_id' => $user['podved_id'],
                'password' => Hash::make($user['pwd']),
            ]);
            if ($usr->exists) {
                $role = Role::whereName($usr->org_id ? 'user' : 'admin')->first();
                $usr->syncRoles([$role]);
                $this->info("Пользователь $usr->email сохранен");
            } else {
                $this->error("Пользователь $usr->email ошибка");
            }
        }
    }

    private function regions()
    {
        $response = Http::post('https://api-ias.xn--80apneeq.xn--p1ai/graphql', [
            'query' => '{regions{id,name}}'
        ]);

        $regions = $response->json()['data']['regions'];

        foreach ($regions as $region) {
            Region::updateOrCreate(['id' => $region['id']], ['id' => $region['id'], 'region' => $region['name']]);
        }
    }

    private function orgs()
    {
        $token = $this->conf->builder()
            ->withClaim('reference', 'organization')
            ->getToken($this->conf->signer(), $this->conf->signingKey());
        $resp_token = file_get_contents(
            "https://api.xn--80apneeq.xn--p1ai/api.php?option=reference_api&action=get_reference&module=constructor&reference_token={$token->toString()}"
        );
        $token = $this->conf->parser()->parse($resp_token);
        $constraints = $this->conf->validationConstraints();

        if (!$this->conf->validator()->validate($token, ...$constraints)) {
            $this->info('Error with token validate');
            return 0;
        }
        $data = $token->claims();
        foreach ($data->all() as $org) {
            //  dd($org);
            try {
                Organization::updateOrCreate(['id' => $org['id']], [
                    'id' => $org['id'],
                    'name' => $org['name'],
                    'full_name' => $org['fullname'],
                    'short_name' => $org['shot_name'],
                    'type_id' => $org['type_org'],
                    'region_id' => $org['region_id'],
                    'founder_id' => $org['subordination'],
                    'inn' => $org['inn'],
                ]);
            } catch (Exception) {
                $this->error(serialize($org));
            }
        }
    }
}
