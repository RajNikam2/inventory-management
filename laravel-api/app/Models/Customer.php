<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $table = 'customers';

    protected $fillable = [
        'organization', 'address', 'notes'
    ];
    function country()
    {
        return $this->belongsTo(Country::class);
    }

    function industry()
    {
        return $this->belongsTo(Industry::class);
    }
    // function contacts()
    // {
    //     return $this->hasMany(contacts::class);
    // }

    function type()
    {
        return $this->belongsTo(Type::class);
    }
    function contacts()
    {
        return $this->morphMany(Contacts::class, 'contactable');
    }
    function url()
    {
        return $this->morphMany(Url::class, 'urlable');
    }
}
