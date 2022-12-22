<?php

namespace App\Http\Controllers;

use App\Models\SalesType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class SalesTypeController extends Controller
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
    public function saveSalesType(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'sales_type_name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $salesType = new SalesType();
        $salesType->sales_type_name = $req->sales_type_name;
        $salesType->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSalesType(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return SalesType::where('sales_types.sales_type_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return SalesType::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSalesType(Request $req, $id)
    {
        $salesType = SalesType::find($id);
        $salesType->sales_type_name = $req->sales_type_name;
        $salesType->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSalesTypeById(Request $request, $id)
    {
        $salesType = SalesType::find($id);
        return $salesType;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $salesType = SalesType::find($id);
        $salesType->delete();
        echo "deleted successfully";
    }
}
