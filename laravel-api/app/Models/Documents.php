<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    use HasFactory;
    // function shipments(){
    //     return $this->belongsTo(shipments::class);
    // }
    function order()
    {
        return $this->belongsTo(Order::class);
    }
}
