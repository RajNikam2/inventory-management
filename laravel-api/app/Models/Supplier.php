<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    function order()
    {
        return $this->hasMany(Order::class);
    }

    function country()
    {
        return $this->belongsTo(Country::class);
    }

    function type()
    {
        return $this->belongsTo(Type::class);
    }

    // function contact()
    // {
    //     return $this->hasMany(contacts::class);
    // }
    function contacts()
    {
        return $this->morphMany(Contacts::class, 'contactable');
    }
    function url()
    {
        return $this->morphMany(Url::class, 'urlable');
    }
}
