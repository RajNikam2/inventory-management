<?php

namespace App\Filters;

use App\Filters\AbstractFilter;
use App\Filters\SupplierCountryIdFilter;

class SupplierAbstractFilter extends AbstractFilter
{
    protected $filters = [

        'country_id' => SupplierCountryIdFilter::class,
        'type_id' => TypeIdFilter::class


    ];
}
