<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\TransformsRequest;
use Illuminate\Http\Request;

class ConvertNullToNull extends TransformsRequest
{
    /**
     * All of the registered skip callbacks.
     *
     * @var array
     */
    protected static array $skipCallbacks = [];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next): mixed
    {
        foreach (static::$skipCallbacks as $callback) {
            if ($callback($request)) {
                return $next($request);
            }
        }

        return parent::handle($request, $next);
    }

    /**
     * Transform the given value.
     *
     * @param  string  $key
     * @param  mixed  $value
     * @return mixed
     */
    protected function transform($key, $value): mixed
    {
        return ($value == null or $value == 'null' or $value == 'undefined') ? null : $value;
    }

    /**
     * Register a callback that instructs the middleware to be skipped.
     *
     * @param  \Closure  $callback
     * @return void
     */
    public static function skipWhen(Closure $callback)
    {
        static::$skipCallbacks[] = $callback;
    }
}
