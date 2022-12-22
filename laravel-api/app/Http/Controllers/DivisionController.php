<?php

namespace App\Http\Controllers;

use App\Models\Division;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DivisionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveDivision(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'division_name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $division = new Division();
        $division->division_name = $req->division_name;
        $division->save();
        echo "successfully submitted";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDivision(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Division::where('divisions.division_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Division::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showByIdDivision($id)
    {
        $division = Division::find($id);
        return $division;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateDivision(Request $req, $id)
    {
        $division = Division::find($id);
        $division->division_name = $req->division_name;
        $division->update();
        echo "affected successfully";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $division = Division::find($id);
        $division->delete();
        echo "deleted successfully";
    }
}
