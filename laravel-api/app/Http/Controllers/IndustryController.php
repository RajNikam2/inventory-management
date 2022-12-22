<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class IndustryController extends Controller
{
    function saveIndustry(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'industry_name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $industry = new Industry();
        $industry->industry_name = $req->industry_name;
        $industry->save();
        echo "successfully submitted";
    }
    function showIndustry(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Industry::where('industries.industry_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Industry::all();
        }
        // return $industry->get();
    }

    function showByIdIndustry(Request $req, $id)
    {
        $industry = Industry::find($id);
        return $industry;
    }

    function deleteIndustry(Request $req, $id)
    {
        $industry = Industry::find($id);
        $industry->delete();
        echo "deleted successfully";
    }

    function updateIndustry(Request $req, $id)
    {
        // $industry = Industry::find($id);

        $industry = Industry::find($id);
        $industry->industry_name = $req->industry_name;
        $industry->update();
        echo "affected successfully";
    }
}
