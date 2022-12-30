<?php

namespace App\Filters;

class TeamMembersTypeIdFilter
{

    public function filter($builder, $value)
    {

        return $builder->where('TeamMembers.type_id', $value);
    }
}
