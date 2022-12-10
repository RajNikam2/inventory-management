<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    use HasFactory;
    // function customer()
    // {
    //     return $this->belongsTo(customer::class);
    // }
    // function supplier()
    // {
    //     return $this->belongsTo(supplier::class);
    // }
    function urlable()
    {
        return $this->morphTo();
    }
    
}
