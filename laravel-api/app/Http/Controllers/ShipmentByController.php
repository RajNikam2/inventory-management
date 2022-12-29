<?php

namespace App\Http\Controllers;

use App\Models\ShipmentBy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShipmentByController extends Controller
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
    public function saveShipmentBy(Request $req)
    {
        $shipmentby = new ShipmentBy();
        $shipmentby->name = $req->name;
        $shipmentby->save();
        return $shipmentby;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getShipmentBy(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('shipment_bies');
        if (!empty($requestParam)) {
            $query->where('shipment_bies.name', 'like', '%' . $requestParam['q'] . '%');
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showShipmentByById($id)
    {
        $shipmentby = ShipmentBy::find($id);
        return $shipmentby;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateShipmentBy(Request $req, $id)
    {
        $shipmentby = ShipmentBy::find($id);
        $shipmentby->name = $req->name;
        $shipmentby->update();
        return $shipmentby;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteShipmentBy($id)
    {
        $shipmentby = ShipmentBy::find($id);
        $shipmentby->delete();
        echo "deleted successfully";
    }
}
