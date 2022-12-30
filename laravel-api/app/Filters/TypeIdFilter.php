<?php

namespace App\Filters;

class TypeIdFilter
{

    public function filter($builder, $value)
    {
        return $builder->where('customers.type_id', $value);
    }
}
