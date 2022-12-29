<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ShipmentController extends Controller
{

    private $searchShipmentsArray = array('shipments.BL', 'shipments.ETA', 'shipments.invoice_number', 'shipments.invoice_amount', 'shipments.balance_due_date', 'shipments.commission_value', 'shipments.FOB', 'shipments.container_number');
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
    public function saveShipment(Request $req)
    {
        $shipment = new Shipment();
        $shipment->sail_date = $req->sail_date;
        $shipment->BL = $req->BL;
        $shipment->ETA = $req->ETA;
        $shipment->invoice_number = $req->invoice_number;
        $shipment->invoice_amount = $req->invoice_amount;
        $shipment->balance_due_date = $req->balance_due_date;
        $shipment->FOB = $req->FOB;
        $shipment->commission_value = $req->commission_value;
        $shipment->container_number = $req->container_number;
        $shipment->shipping_line_id = $req->shipping_line_id;
        $shipment->port_of_loading_id = $req->port_of_loading_id;
        $shipment->shipment_by_id = $req->shipment_by_id;
        $shipment->destination_port_id = $req->destination_port_id;
        $shipment->order_id = $req->order_id;
        $shipment->save();

        return $shipment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getShipment(Request $req)
    {
        $requestParam = $req->all();

        $query = DB::table('shipments')
            ->join('shipping_lines', 'shipping_lines.id', '=', 'shipments.shipping_line_id')
            ->join('port_of_loadings', 'port_of_loadings.id', '=', 'shipments.port_of_loading_id')
            ->join('shipment_bies', 'shipment_bies.id', '=', 'shipments.shipment_by_id')
            ->join('destination_ports', 'destination_ports.id', '=', 'shipments.destination_port_id')
            ->join('orders', 'orders.id', '=', 'shipments.order_id');


        if (!empty($requestParam)) {
            // $query

            foreach ($this->searchShipmentsArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        // return $query->clone()->get();

        return $query->cursorPaginate($requestParam['limit']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showShipmentById($id)
    {
        $tm = Shipment::join('shipping_lines', 'shipping_lines.id', '=', 'shipments.shipping_line_id')
            ->join('port_of_loadings', 'port_of_loadings.id', '=', 'shipments.port_of_loading_id')
            ->join('shipment_bies', 'shipment_bies.id', '=', 'shipments.shipment_by_id')
            ->join('destination_ports', 'destination_ports.id', '=', 'shipments.destination_port_id')
            ->join('orders', 'orders.id', '=', 'shipments.order_id')
            ->where('shipments.id', '=', $id);

        return $tm->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateShipment(Request $req, $id)
    {
        $shipment = Shipment::find($id);
        $shipment->sail_date = $req->sail_date;
        $shipment->BL = $req->BL;
        $shipment->ETA = $req->ETA;
        $shipment->invoice_number = $req->invoice_number;
        $shipment->invoice_amount = $req->invoice_amount;
        $shipment->balance_due_date = $req->balance_due_date;
        $shipment->FOB = $req->FOB;
        $shipment->commission_value = $req->commission_value;
        $shipment->container_number = $req->container_number;
        $shipment->shipping_line_id = $req->shipping_line_id;
        $shipment->port_of_loading_id = $req->port_of_loading_id;
        $shipment->shipment_by_id = $req->shipment_by_id;
        $shipment->destination_port_id = $req->destination_port_id;
        $shipment->order_id = $req->order_id;
        $shipment->update();
        echo "effected successfully";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteShipment($id)
    {
        $shipment = Shipment::find($id);
        $shipment->delete();
        echo "deleted successfully";
    }
}
