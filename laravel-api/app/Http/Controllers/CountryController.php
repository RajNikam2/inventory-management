<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;
use Illuminate\Support\Facades\Validator;


class CountryController extends Controller
{

    function saveCountry(Request $req)
    {

        $validator = Validator::make($req->all(), [
            'country_name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $country = new Country();
        $country->country_name = $req->country_name;

        $country->save();
        echo "successfully submitted";
    }

    function showByIdCountry(Request $req, $id)
    {
        $country = Country::find($id);
        return $country;
    }
    function showCountry(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Country::where('countries.country_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Country::all();
        }
    }

    function deleteCountry(Request $req, $id)
    {
        $country = Country::find($id);
        $country->delete();
        echo "deleted successfully";
    }

    function updateCountry(Request $req, $id)
    {

        $country = Country::find($id);
        $country->country_name = $req->country_name;
        $country->update();
        echo "affected successfully";
    }
}
