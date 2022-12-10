<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    use HasFactory;
    function documents()
    {
        return $this->hasMany(Documents::class);
    }
    function shipping_line()
    {
        return $this->belongsTo(ShippingLine::class);
    }
    function destination_port()
    {
        return $this->belongsTo(DestinationPort::class);
    }
    function recieved_by()
    {
        return $this->belongsTo(RecievedBy::class);
    }
    function port_of_loading()
    {
        return $this->belongsTo(PortOfLoading::class);
    }
    function order()
    {
        return $this->belongsTo(Order::class);
    }
}
