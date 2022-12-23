<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TeamMember;
use Kyslik\ColumnSortable\Sortable;
use Illuminate\Database\Eloquent\Builder;
use App\Filters\CustomerAbstractFilter;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'customers';

    protected $fillable = [
        'organization', 'address', 'notes', 'country_id', 'industry_id', 'type_id'
    ];
    // public $sortable = ['organization', 'created_at'];
    // protected $sortable = [
    //     'organization', 'address', 'notes', 'country_id', 'industry_id', 'type_id'
    // ];
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
    function TeamMember()
    {
        return $this->belongsTo(TeamMember::class);
    }

    public function scopeFilter(Builder $builder, $request)
    {
        return (new CustomerAbstractFilter($request))->filter($builder);
    }
    
}
