<?php

namespace App\Http\Controllers;

use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    function saveType(Request $req)
    {
        $req->validate([
            'type_name' => 'required'
        ]);

        $country = new Type();
        $country->type_name = $req->type_name;
        $country->save();
        echo "successfully submitted";
    }
}
