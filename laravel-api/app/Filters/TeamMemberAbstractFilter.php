<?php

namespace App\Filters;

use App\Filters\AbstractFilter;

class TeamMemberAbstractFilter extends AbstractFilter
{
    protected $filters = [
        // 'organization' => OrganizationFilter::class,
        // 'Address' => AddressFilter::class,
        'country_id' => TeamMembersCountryIdFilter::class,
        'type_id' => TeamMembersTypeIdFilter::class


    ];
}
