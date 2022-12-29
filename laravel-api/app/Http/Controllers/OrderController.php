<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    private $searchOrderArray = array(
        'orders.order_date', 'orders.po_number', 'suppliers.organization', 'customers.organization', 'payments.ETA', 'orders.status'

    );

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
    public function saveOrder(Request $req)
    {
        $order = new Order();
        $order->order_date = $req->order_date;
        $order->proforma_invoice = $req->proforma_invoice;
        $order->proforma_invoice_date = $req->proforma_invoice_date;
        $order->proforma_invoice_value = $req->proforma_invoice_value;
        $order->expected_commision = $req->expected_commision;
        $order->po_number = isset($req->po_number) ? $req->po_number : null;
        $order->advance_payment = $req->advance_payment;
        $order->advance_balance = $req->advance_balance;
        $order->container40 = $req->container40;
        $order->container20 = $req->container20;
        $order->pallets_skids = $req->pallets_skids;
        $order->others = $req->others;
        $order->Team_members_id = $req->Team_members_id;
        $order->division_id = $req->division_id;
        $order->country_id = $req->country_id;
        $order->region_id = $req->region_id;
        $order->customer_id = $req->customer_id;
        $order->sales_type_id = $req->sales_type_id;
        $order->payment_id = $req->payment_id;
        $order->supplier_id = $req->supplier_id;
        $order->payment_term_id = $req->payment_term_id;
        $order->delivery_term_id = $req->delivery_term_id;
        $order->delivery_time_id = $req->delivery_time_id;
        $order->status = 'pending';
        $order->save();

        return $order;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getOrders(Request $req)
    {

        $requestParam = $req->all();

        $query = DB::table('orders')
            ->join('customers', 'customers.id', '=', 'orders.customer_id')
            ->join('suppliers', 'suppliers.id', '=', 'orders.supplier_id')
            ->join('payments', 'payments.id', '=', 'orders.payment_id');

        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchOrderArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        // } else {
        //     return $query->clone()->get();
        // }
        return $query->paginate($requestParam['limit']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateOrder(Request $req, $id)
    {
        $order = Order::find($id);
        $order->order_date = $req->order_date;
        $order->proforma_invoice = $req->proforma_invoice;
        $order->proforma_invoice_date = $req->proforma_invoice_date;
        $order->proforma_invoice_value = $req->proforma_invoice_value;
        $order->expected_commision = $req->expected_commision;
        $order->po_number = isset($req->po_number) ? $req->po_number : null;
        $order->advance_payment = $req->advance_payment;
        $order->advance_balance = $req->advance_balance;
        $order->container40 = $req->container40;
        $order->container20 = $req->container20;
        $order->pallets_skids = $req->pallets_skids;
        $order->others = $req->others;
        $order->Team_members_id = $req->Team_members_id;
        $order->division_id = $req->division_id;
        $order->country_id = $req->country_id;
        $order->region_id = $req->region_id;
        $order->customer_id = $req->customer_id;
        $order->sales_type_id = $req->sales_type_id;
        $order->payment_id = $req->payment_id;
        $order->supplier_id = $req->supplier_id;
        $order->payment_term_id = $req->payment_term_id;
        $order->delivery_term_id = $req->delivery_term_id;
        $order->delivery_time_id = $req->delivery_time_id;
        $order->update();
        echo "completed";
        // exit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showOrderById(Request $request, $id)
    {
        return Order::where('orders.id', '=', $id)
            ->join('customers', 'customers.id', '=', 'orders.customer_id')
            ->join('suppliers', 'suppliers.id', '=', 'orders.supplier_id')
            ->join('payments', 'payments.id', '=', 'orders.payment_id')
            ->join('TeamMembers', 'TeamMembers.id', '=', 'orders.Team_members_id')
            ->join('divisions', 'divisions.id', '=', 'orders.division_id')
            ->join('regions', 'regions.id', '=', 'orders.region_id')
            ->join('countries', 'countries.id', '=', 'orders.country_id')
            ->join('sales_types', 'sales_types.id', '=', 'orders.sales_type_id')
            ->join('payment_terms', 'payment_terms.id', '=', 'orders.payment_term_id')
            ->join('delivery_terms', 'delivery_terms.id', '=', 'orders.delivery_term_id')
            ->join('delivery_times', 'delivery_times.id', '=', 'orders.delivery_time_id')
            ->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        $order->delete();
        echo "deleted successfully";
    }
}
