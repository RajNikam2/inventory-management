<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    function category()
    {
        return $this->belongsTo(Category::class);
    }
    function sub_category()
    {
        return $this->belongsTo(SubCategory::class);
    }
    // function unit()
    // {
    //     return $this->belongsTo(units::class);
    // }
    function order()
    {
        return $this->belongsToMany(Order::class, 'OrderProducts');
    }
}
