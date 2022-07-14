<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

/**
 * App\Models\ObjectEventFile
 *
 * @property int $id
 * @property int $event_id
 * @property string $server_name
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile query()
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereServerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string|null $label
 * @method static \Illuminate\Database\Eloquent\Builder|ObjectEventFile whereLabel($value)
 * @property-read \App\Models\ObjectEvent $event
 */
class ObjectEventFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'server_name',
        'name',
        'label',
    ];

    public function event(): BelongsTo
    {
        return $this->belongsTo(ObjectEvent::class, 'event_id', 'id');
    }

    public function download(): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        $path = "public/object/{$this->event->obj_id}/events/{$this->event_id}/$this->server_name";
        return Storage::download($path, $this->name);
    }
}
