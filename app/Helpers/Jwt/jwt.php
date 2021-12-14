<?php

namespace App\Helpers\Jwt;

use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;

trait jwt
{
    /** @var $conf Configuration */
    public Configuration $conf;

    public function init()
    {
        $this->conf = Configuration::forSymmetricSigner(new Sha256(), InMemory::plainText('example_key233'));
        $cons = [new FuckingConstraint()];
        $this->conf->setValidationConstraints(...$cons);
    }
}
