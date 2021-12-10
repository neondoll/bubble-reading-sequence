<?php

namespace app\jwt;

use Lcobucci\JWT\Token;
use Lcobucci\JWT\Validation\Constraint;

class FuckingConstraint implements Constraint
{
    public function assert(Token $token): void
    {
        // TODO: Implement assert() method.
    }
}
