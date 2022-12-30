<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Customer;
use App\Models\Order;
use App\Models\TeamMember;
use Attribute;
use Illuminate\Database\Eloquent\HigherOrderBuilderProxy;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Schema\Builder;
// use 




class CustomerController extends Controller
{
    private $searchCustomerArray = array('customers.organization');



    function saveCustomer(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'organization' => 'required | string',
            'address' => 'required | alpha_num',
            'notes' => 'required | string',
            'country_id' => 'required | numeric',
            'industry_id' => 'required | numeric',
            // 'type_id' => 'required | numeric'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }


        $customer = new Customer();
        $customer->organization = $req->organization;
        $customer->address = $req->address;
        $customer->notes = $req->notes;
        $customer->country_id = $req->country_id;
        $customer->industry_id = $req->industry_id;
        $customer->type_id = $req->type_id;
        $customer->team_member_id = $req->team_member_id;

        $customer->save();
        return $customer;
    }

    function showCustomers(Request $req)
    {

        $requestParam = $req->all();


        $query = Customer::select('customers.*', 'countries.country_name')
            ->join('countries', 'countries.id', '=', 'customers.country_id')
            ->join('industries', 'industries.id', '=', 'customers.industry_id')
            ->join('types', 'types.id', '=', 'customers.type_id')
            ->join('TeamMembers', 'TeamMembers.id', '=', 'customers.team_member_id');

        if (!empty($requestParam['q'])) {
            foreach ($this->searchCustomerArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        $query->filter($req);
        $query->orderBy("{$requestParam['sortBy']}", "{$requestParam['sortOrder']}");
        $result = $query->paginate($requestParam['limit']);
        return $result;
    }




    function showCustomerById(Request $req, $id)
    {
        return Customer::where('customers.id', '=', $id)
            ->join('countries', 'countries.id', '=', 'customers.country_id')
            ->join('industries', 'industries.id', '=', 'customers.industry_id')
            ->join('types', 'types.id', '=', 'customers.type_id')
            ->join('TeamMembers', 'TeamMembers.id', '=', 'customers.team_member_id')
            ->get();
    }

    function deleteCustomer(Request $req, $id)
    {
        $customer = Customer::find($id);
        $customer->delete();
        return $customer;
    }

    function updateCustomer(Request $req, $id)
    {
        $customer = Customer::find($id);
        $customer->Organization = $req->organization;
        $customer->Address = $req->address;
        $customer->notes = $req->notes;
        $customer->country_id = $req->country_id;
        $customer->industry_id = $req->industry_id;
        $customer->type_id = $req->type_id;
        $customer->update();
        return $customer;
    }

    // function sortBy($ColumnName)
    // {
    //     if ($this->sortColumnName === $ColumnName) {
    //         $this->sortDirection = $this->swapSortDirection();
    //     } else {
    //         $this->sortDirection = 'asc';
    //     }
    //     $this->SortColumnName = $ColumnName;
    // }

    // function swapSortDirection()
    // {
    //     return $this->sortDirection = 'asc' ? 'desc' : 'asc';
    // }
}
