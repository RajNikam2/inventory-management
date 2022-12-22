<?php

namespace App\Filters;

class CountryIdFilter
{

    public function filter($builder, $value)
    {
        return $builder->where('country_id', $value);
    }
}
