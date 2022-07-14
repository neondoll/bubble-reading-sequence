<?php

namespace App\GraphQL\Resolvers;

use App\Models\ObjectEvent;
use Carbon\Carbon;

class ObjectEventResolver
{
    public function resolveDatep02(ObjectEvent $objectEvent)
    {
        if($date = $objectEvent->p02) {
            return Carbon::createFromDate($date)->format('d.m.Y');
        }

        return null;
    }
    
    public function resolveDatep03(ObjectEvent $objectEvent)
    {
        if($date = $objectEvent->p03) {
            return Carbon::createFromDate($date)->format('d.m.Y');
        }

        return null;
    }
}