<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

/**
 * App\Models\ProgramFile
 *
 * @property int $id
 * @property int $program_id
 * @property string $server_name
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereServerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProgramFile whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ProgramFile extends Model
{
    use HasFactory;

    protected static function boot()
    {
        parent::boot();
        self::deleting(function ($model) {
            Storage::delete($model->getPath());
        });
    }

    public static function download($id)
    {
        $pr = self::findOrFail($id);

        if (Storage::exists($pr->getPath())) {
            return response()->download($pr->getPath(true), $pr->name);
        }

        abort('404', 'Файл не найден');
    }

    /**
     * @throws \Throwable
     */
    public static function upload($request)
    {
        return DB::transaction(function () use ($request) {
            $file = $request->file('file');
            $id = $request->post('id');
            $server_name = $file->hashName();

            Program::findOrFail($id)->file()->create([
                'server_name' => $server_name,
                'name' => $file->getClientOriginalName()
            ]);

            if (!$file->store("public/program/$id")) {
                throw new Exception('Ошибка при загрузке файла');
            }
            return response()->json(['success' => true]);
        });
    }

    public function getPath($full = false): string
    {
        $path = "public/program/{$this->program_id}/{$this->server_name}";
        return $full ? Storage::path($path) : $path;
    }

    protected $fillable = [
        'program_id',
        'server_name',
        'name'
    ];
}
