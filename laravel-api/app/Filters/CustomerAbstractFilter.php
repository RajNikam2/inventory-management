<?php

namespace App\Filters;

use App\Filters\AbstractFilter;

class CustomerAbstractFilter extends AbstractFilter
{
    protected $filters = [
        // 'organization' => OrganizationFilter::class,
        // 'Address' => AddressFilter::class,
        'country_id' => CountryIdFilter::class,
        'team_member_id' => TeamMemberIdFilter::class,
        'industry_id' => IndustryIdFilter::class,
        'type_id' => TypeIdFilter::class


    ];
}
