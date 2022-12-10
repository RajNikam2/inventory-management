<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    function product()
    {
        return $this->hasMany(Product::class);
    }
    function category()
    {
        return $this->belongsTo(Category::class);
    }
}
