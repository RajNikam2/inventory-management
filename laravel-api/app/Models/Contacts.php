<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Suppliers;

class Contacts extends Model
{
    use HasFactory;
    // function customers()
    // {
    //     return $this->belongsTo(customers::class);
    // }
    // function supplier()
    // {
    //     return $this->belongsTo(Suppliers::class);
    // }
    function contactable()
    {
        return $this->morphTo();
    }
    function mail()
    {
        return $this->hasMany(Mail::class);
    }
    function phone()
    {
        return $this->hasMany(Phone::class);
    }
}
