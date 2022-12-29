<?php

namespace App\Http\Controllers;

use App\Models\Commission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CommissionController extends Controller
{
    private $searchCommissionArray = array('commissions.bl', 'commissions.invoice', 'commissions.amount', 'commissions.commision', 'commissions.percentage');

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
    public function saveCommission(Request $req)
    {
        $commission = new Commission();
        $commission->bl = $req->bl;
        $commission->invoice = $req->invoice;
        $commission->amount = $req->amount;
        $commission->commision = $req->commision;
        $commission->percentage = $req->percentage;
        $commission->order_id = $req->order_id;
        $commission->save();
        return $commission;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getCommissions(Request $req)
    {
        $requestParam = $req->all();

        $query = DB::table('commissions')->join('orders', 'orders.id', '=', 'commissions.order_id');
        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchCommissionArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showCommissionById($id)
    {
        return DB::table('commissions')
            ->join('orders', 'orders.id', '=', 'commissions.order_id')
            ->where('commissions.id', '=', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCommission(Request $req, $id)
    {
        $commission = Commission::find($id);
        $commission->bl = $req->bl;
        $commission->invoice = $req->invoice;
        $commission->amount = $req->amount;
        $commission->commision = $req->commision;
        $commission->percentage = $req->percentage;
        $commission->order_id = $req->order_id;
        $commission->update();
        return $commission;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $commission = Commission::find($id);
        $commission->delete();
        echo "deleted successfully";
    }
}
