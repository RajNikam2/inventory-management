<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
