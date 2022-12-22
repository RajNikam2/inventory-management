<?php

namespace App\Filters;

class TeamMemberIdFilter
{

    public function filter($builder, $value)
    {
        return $builder->where('customers.team_member_id', $value);
    }
}
