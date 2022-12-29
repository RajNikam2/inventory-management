<?php

namespace App\Http\Controllers;

use App\Models\PortOfLoading;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PortOfLoadingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // {
    //     //
    // }

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
    public function savePortOfLoading(Request $req)
    {
        $portofloading = new PortOfLoading();
        $portofloading->port = $req->port;
        $portofloading->save();
        return $portofloading;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getPortOfLoading(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('port_of_loadings');
        if (!empty($requestParam)) {
            $query->where('port_of_loadings.port', 'like', '%' . $requestParam['q'] . '%');
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showPortOfLoadingById($id)
    {
        $portofloading = PortOfLoading::find($id);
        return $portofloading;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePortOfLoading(Request $req, $id)
    {
        $portofloading = PortOfLoading::find($id);
        $portofloading->port = $req->port;
        $portofloading->update();
        return $portofloading;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePortOfLoading($id)
    {
        $portofloading = PortOfLoading::find($id);
        $portofloading->delete();
        echo "deleted successfully";
    }
}
