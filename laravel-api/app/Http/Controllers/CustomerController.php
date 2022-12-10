<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    function saveCustomer(Request $req)
    {
        // echo "comes";exit;
        $req->validate([
            'organization' => 'required',
            'address' => 'required',
            'notes' => 'required',
        ]);

        $customer = new Customer();
        $customer->organization = $req->organization;
        $customer->address = $req->address;
        $customer->notes = $req->notes;

        $customer->save();
        return response()->json();
    }

    function showCustomer()
    {
        return Customer::orderBy('id', 'desc')->cursorPaginate(10);
    }

    function delete(Request $req, $id)
    {
        Customer::find($id);
        $req->delete();
    }

    function update(Request $req, $id)
    {
        $customer = Customer::find($id);
        $customer->Ornganization = $req->organization;
        $customer->Industry = $req->industry;
        $customer->Address = $req->address;
        $customer->Country = $req->country;
    }
    function welcome()
    {
        echo "customer added";
    }
}
