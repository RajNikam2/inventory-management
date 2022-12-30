<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
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
        return $country;
    }

    function showByIdCountry(Request $req, $id)
    {
        $country = Country::find($id);
        return $country;
    }
    function showCountry(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('countries');

        if (!empty($requestParam)) {
            $query->where('countries.country_name', 'like', '%' . $requestParam['q'] . '%');
        }
        $query->orderBy("{$requestParam['sortBy']}", "{$requestParam['sortOrder']}");
        $result = $query->paginate($requestParam['limit']);
        return $result;
    }

    function deleteCountry(Request $req, $id)
    {
        $country = Country::find($id);
        $country->delete();
        return $country;
    }

    function updateCountry(Request $req, $id)
    {

        $country = Country::find($id);
        $country->country_name = $req->country_name;
        $country->update();
        return $country;
    }
}
