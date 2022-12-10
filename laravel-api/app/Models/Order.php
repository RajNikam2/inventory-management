<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;
    function team_member()
    {
        return $this->belongsTo(TeamMembers::class);
    }
    function division()
    {
        return $this->belongsTo(Division::class);
    }
    function Region()
    {
        return $this->belongsTo(Region::class);
    }
    // function order_status()
    // {
    //     return $this->belongsTo(order_statuses::class);
    // }
    function sales_type()
    {
        return $this->belongsTo(SalesType::class);
    }
    // function destination_country()
    // {
    //     return $this->belongsTo(destination_country::class);
    // }
    function supllier()
    {
        return $this->belongsTo(Supplier::class);
    }
    function payment_term()
    {
        return $this->belongsTo(PaymentTerm::class);
    }
    function delivery_term()
    {
        return $this->belongsTo(DeliveryTerm::class);
    }
    function delivery_time()
    {
        return $this->belongsTo(DeliveryTime::class);
    }
    function payment()
    {
        return $this->belongsTo(Payment::class);
    }

    function file()
    {
        return $this->hasMany(File::class);
    }
    function comment()
    {
        return $this->hasMany(Comment::class);
    }
    function remainder()
    {
        return $this->hasMany(Remainder::class);
    }
    function product()
    {
        return $this->belongsToMany(Product::class, 'OrderProducts');
    }
    function commission()
    {
        return $this->hasOne(Commission::class);
    }
    function shipment()
    {
        return $this->hasMany(Shipment::class);
    }
    function document()
    {
        return $this->hasMany(Documents::class);
    }
}
