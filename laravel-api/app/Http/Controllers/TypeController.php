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

        $type = new Type();
        $type->type_name = $req->type_name;
        $type->save();
        echo "successfully submitted";
    }
    function showType(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Type::where('types.type_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Type::all();
        }
    }

    function showByIdType(Request $req, $id)
    {
        $type = Type::find($id);
        return $type;
    }

    function deleteType(Request $req, $id)
    {
        $type = Type::find($id);
        $type->delete();
        echo "deleted successfully";
    }

    function updateType(Request $req, $id)
    {
        $type = Type::find($id);
        $type->type_name = $req->type_name;
        $type->update();
        echo "affected successfully";
    }
}
