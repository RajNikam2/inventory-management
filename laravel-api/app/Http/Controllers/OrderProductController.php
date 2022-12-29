<?php

namespace App\Http\Controllers;

use App\Models\OrderProducts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class OrderProductController extends Controller
{
    private $searchOrderProductArray = array('order_products.quantity', 'order_products.unit');
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
    public function store(Request $req)
    {
        $orderProduct = new OrderProducts();
        $orderProduct->order_id = $req->order_id;
        $orderProduct->product_id = $req->product_id;
        $$orderProduct->unit_id = $req->unit_id;
        $orderProduct->quantity = $req->quantity;
        $orderProduct->save();
        return $orderProduct;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req, $id)
    {

        $requestParam = $req->all();

        $query = DB::table('order_products')
            ->join('orders', 'orders.id', '=', 'order_products.order_id')
            ->join('products', 'products.id', '=', 'order_products.product_id')
            ->join('units', 'units.id', '=', 'order_products.unit_id');


        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchOrderProductArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        return $query->paginate($requestParam['limit']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showOrderProductById($id)
    {
        return DB::table('order_products')
            ->join('orders', 'orders.id', '=', 'order_products.order_id')
            ->join('products', 'products.id', '=', 'order_products.product_id')
            ->join('units', 'units.id', '=', 'order_products.unit_id')
            ->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        $orderProduct = OrderProducts::find($id);
        $orderProduct->order_id = $req->order_id;
        $orderProduct->product_id = $req->product_id;
        $$orderProduct->unit_id = $req->unit_id;
        $orderProduct->quantity = $req->quantity;
        $orderProduct->update();
        return $orderProduct;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteOrderProduct($id)
    {
        $orderProduct = OrderProducts::find($id);
        $orderProduct->delete();
        echo "deleted successfully";
    }
}
