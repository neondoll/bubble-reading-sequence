<?php

namespace App\GraphQL\Queries;

use App\Models\Form;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class Forms
{
    /**
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args): Collection|array
    {
        $query = Form::query();

        if (DB::getDriverName() == 'sqlite') {
            $query->select([DB::raw("lastName || ' ' || name || ' ' || middleName fio2"), '*']);
        }

        $where = $args['where'] ?? [];

        foreach ($where as $key => $w) {
            switch ($key) {
                case 'region':
                {
                    $query->whereHas(
                        'region',
                        function ($q) use ($w) {
                            $q->where(
                                'name',
                                'like',
                                "%$w%"
                            );
                        }
                    );
                    break;
                }
                case 'fio':
                {
                    $concat = DB::getDriverName() == 'sqlite' ? "fio2" :
                        DB::raw("CONCAT_WS(' ', lastName, name, middleName)");
                    $query->where(
                        $concat,
                        'like',
                        "%$w%"
                    );
                    break;
                }
                default:
                {
                    $query->where($key, 'like', "%$w%");
                }
            }
        }


        return $query->get();
    }
}
