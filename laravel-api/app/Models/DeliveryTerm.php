<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryTerm extends Model
{
    use HasFactory;
    function order()
    {
        return $this->hasMany(Order::class);
    }
}
