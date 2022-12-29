<?php

namespace App\Http\Middleware;

use Closure;


class Cors
{

    public function handle($request, Closure $next)
    {
        header('Access-Control-Allow-Origin:  *');
        header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE,PATCH');
        header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
        return $next($request);
    }
}
