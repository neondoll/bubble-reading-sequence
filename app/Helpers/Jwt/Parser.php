<?php

namespace App\Helpers\Jwt;

use Lcobucci\JWT\Token;

class Parser
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
