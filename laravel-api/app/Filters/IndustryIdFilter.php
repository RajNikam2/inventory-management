<?php

namespace App\Filters;

class IndustryIdFilter
{

    public function filter($builder, $value)
    {
        return $builder->where('customers.industry_id', $value);
    }
}
