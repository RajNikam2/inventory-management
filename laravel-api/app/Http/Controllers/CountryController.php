<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{

    function saveCountry(Request $req)
    {

        $req->validate([
            'country_name' => 'required'
        ]);

        $country = new Country();
        $country->country_name = $req->country_name;

        $country->save();
        echo "successfully submitted";
    }

    function showCountry(Request $req, $id)
    {
        $country = Country::find($id);
        return $country;
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

        $country = Country::find($id);
        $country->country_name = $req->country_name;
        $country->update();
        echo "affected successfully";
    }
}
