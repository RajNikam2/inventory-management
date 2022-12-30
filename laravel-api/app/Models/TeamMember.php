<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use App\Filters\TeamMemberAbstractFilter;

class TeamMember extends Model
{
    use HasFactory;
    protected $table = 'TeamMembers';

    protected $fillable = [
        'first_name', 'last_name', 'position', 'country_id', 'notes', 'assign_territories'
    ];

    function order()
    {
        return $this->hasMany(Order::class);
    }
    function customer()
    {
        return $this->hasMany(Customer::class);
    }
    public function scopeFilter(Builder $builder, $request)
    {
        return (new TeamMemberAbstractFilter($request))->filter($builder);
    }
}
