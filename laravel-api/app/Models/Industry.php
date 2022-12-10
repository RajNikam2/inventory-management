<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    use HasFactory;
    protected $table = 'industries';

    protected $fillable = [
        'industry_name'
    ];

    public function customer()
    {
        return $this->hasMany(Customer::class);
    }
}
