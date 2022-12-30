<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Supplier;

class Contact extends Model
{
    use HasFactory;
    function contactable()
    {
        return $this->morphTo();
    }
    function mail()
    {
        return $this->hasMany(Mail::class);
    }
    function phone()
    {
        return $this->hasMany(Phone::class);
    }
}
