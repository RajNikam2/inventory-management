<?php

namespace App\Http\Controllers;

use App\Models\ShippingLine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShippingLineController extends Controller
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
    public function saveShippingLine(Request $req)
    {
        $shippingline = new ShippingLine();
        $shippingline->name = $req->name;
        $shippingline->save();
        return $shippingline;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getShippingLine(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('shipping_lines');
        if (!empty($requestParam)) {
            $query->where('shipping_lines.name', 'like', '%' . $requestParam['q'] . '%');
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showShippingLineById($id)
    {
        $shippingline = ShippingLine::find($id);
        return $shippingline;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateShippingLine(Request $req, $id)
    {
        $shippingline = ShippingLine::find($id);
        $shippingline->name = $req->name;
        $shippingline->update();
        return $shippingline;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteShippingLine($id)
    {
        $shippingline = ShippingLine::find($id);
        $shippingline->delete();
        echo "deleted successfully";
    }
}
