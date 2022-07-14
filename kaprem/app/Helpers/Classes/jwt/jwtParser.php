<?php

namespace App\Helpers\Classes\jwt;

use Lcobucci\JWT\Token;

class jwtParser
{
    use jwt;

    public function __construct()
    {
        $this->init();
    }

    public function parse($token): Token
    {
        return $this->conf->parser()->parse($token);
    }
}
