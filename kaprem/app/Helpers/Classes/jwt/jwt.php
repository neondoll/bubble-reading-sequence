<?php


namespace App\Helpers\Classes\jwt;

use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;

trait jwt
{
    public function init()
    {
        $this->conf = Configuration::forSymmetricSigner(
            new Sha256(),
            InMemory::plainText('example_key233')
        );
        $cons = [
          new FuckingConstraint()
        ];
        $this->conf->setValidationConstraints(...$cons);
    }
}
