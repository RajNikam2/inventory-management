<?php

namespace App\Filters;

class SupplierCountryIdFilter
{

    public function filter($builder, $value)
    {

        return $builder->where('suppliers.country_id', $value);
    }
}
