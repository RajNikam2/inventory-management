<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Suppliers;

class Type extends Model
{
    protected $table = 'types';

    protected $fillable = [
        'type_name'
    ];
    use HasFactory;
    function customer()
    {
        return $this->hasMany(Customer::class);
    }
    function supplier()
    {
        return $this->hasMany(Supplier::class);
    }
}
