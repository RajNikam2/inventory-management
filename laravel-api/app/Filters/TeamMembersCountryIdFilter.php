<?php

namespace App\Filters;

class TeamMembersCountryIdFilter
{

    public function filter($builder, $value)
    {

        return $builder->where('TeamMembers.country_id', $value);
    }
}
