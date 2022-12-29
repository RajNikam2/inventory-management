<?php

namespace App\Http\Controllers;

use App\Models\DestinationPort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class DestinationPortController extends Controller
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
    public function saveDestinationPort(Request $req)
    {
        $destinationPort = new DestinationPort();
        $destinationPort->destination_port = $req->destination_port;
        $destinationPort->save();
        return $destinationPort;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getDestinationPort(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('destination_ports');
        if (!empty($requestParam)) {
            $query->where('destination_ports.destination_port', 'like', '%' . $requestParam['q'] . '%');
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDestinationPortById($id)
    {
        $destinationPort = DestinationPort::find($id);
        return $destinationPort;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateDestinationPort(Request $req, $id)
    {
        $destinationPort = DestinationPort::find($id);
        $destinationPort->port = $req->port;
        $destinationPort->update();
        return $destinationPort;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteDestinationPort($id)
    {
        $destinationPort = DestinationPort::find($id);
        $destinationPort->delete();
        echo "deleted successfully";
    }
}
