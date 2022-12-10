<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShipmentBy extends Model
{
    use HasFactory;
    function shipments()
    {
        return $this->hasMany(Shipment::class);
    }
}
