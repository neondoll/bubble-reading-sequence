<?php

namespace App\Helpers\Traits;

use Illuminate\Database\Eloquent\Collection;

trait RelationsSaver
{
    public function setRelationValue(array|Collection $relations): static
    {
        foreach ($relations as $relation) {
            $relation2 = $relation->replicate();
            $relation2->form_id = $this->id;
            $relation2->push();
        }
        return $this;
    }

}
