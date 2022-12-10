<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use Illuminate\Http\Request;

class IndustryController extends Controller
{
    function saveIndustry(Request $req)
    {
        $req->validate([
            'industry_name' => 'required'
        ]);

        $industry = new Industry();
        $industry->industry_name = $req->industry_name;
        $industry->save();
        echo "successfully submitted";
    }

    function showIndustry(Request $req, $id)
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
        $industry = Industry::find($id);

        $industry = Industry::find($id);
        $industry->industry_name = $req->industry_name;
        $industry->update();
        echo "affected successfully";
    }
}
