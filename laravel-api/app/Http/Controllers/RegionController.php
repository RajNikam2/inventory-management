<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class RegionController extends Controller
{
    public function saveRegion(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $region = new Region();
        $region->name = $req->name;
        $region->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showRegions(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Region::where('regions.name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Region::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateRegion(Request $req, $id)
    {
        $region = Region::find($id);
        $region->name = $req->name;
        $region->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showRegionById(Request $request, $id)
    {
        $region = Region::find($id);
        return $region;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $region = Region::find($id);
        $region->delete();
        echo "deleted successfully";
    }
}
