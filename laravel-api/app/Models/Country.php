<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Suppliers;

class Country extends Model
{
    use HasFactory;
    protected $table = 'countries';

    protected $fillable = [
        'country_name',

    ];


    public function customer()
    {
        return $this->hasMany(Customer::class);
    }

    public function supplier()
    {
        return $this->hasMany(Suppliers::class);
    }
}
