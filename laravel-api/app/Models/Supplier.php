<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use App\Filters\SupplierAbstractFilter;

class Supplier extends Model
{
    use HasFactory;

    function order()
    {
        return $this->hasMany(Order::class);
    }

    function country()
    {
        return $this->belongsTo(Country::class);
    }

    function type()
    {
        return $this->belongsTo(Type::class);
    }

    // function contact()
    // {
    //     return $this->hasMany(contacts::class);
    // }
    function contacts()
    {
        return $this->morphMany(Contacts::class, 'contactable');
    }
    function url()
    {
        return $this->morphMany(Url::class, 'urlable');
    }

    public function scopeFilter(Builder $builder, $request)
    {
        return (new SupplierAbstractFilter($request))->filter($builder);
    }
}
