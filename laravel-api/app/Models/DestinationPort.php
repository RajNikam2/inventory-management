<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DestinationPort extends Model
{
    use HasFactory;
    function shipments()
    {
        return $this->hasMany(Shipments::class);
    }
}
