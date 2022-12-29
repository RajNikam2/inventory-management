<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PaymentsController extends Controller
{
    private $searchPaymentArray = array('payments.ETA', 'payments.BL', 'payments.invoice', 'payments.invoice_amount', 'payments.balance');

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
    public function savePayments(Request $req)
    {
        $payment = new Payment();
        $payment->ETA = $req->ETA;
        $payment->BL = $req->BL;
        $payment->invoice = $req->invoice;
        $payment->invoice_amount = $req->invoice_amount;
        $payment->balance = $req->balance;
        $payment->due_date = $req->due_date;
        $payment->no_of_days = $req->no_of_days;
        $payment->save();
        echo "success";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showPayments(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('payments');
        if (!empty($requestParam)) {
            foreach ($this->searchPaymentArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        } else {
            return Payment::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePayments(Request $req, $id)
    {
        $payment =  Payment::find($id);
        $payment->ETA = $req->ETA;
        $payment->BL = $req->BL;
        $payment->invoice = $req->invoice;
        $payment->invoice_amount = $req->invoice_amount;
        $payment->balance = $req->balance;
        $payment->due_date = $req->due_date;
        $payment->no_of_days = $req->no_of_days;
        $payment->update();
        echo "success";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function ShowPaymentsById(Request $request, $id)
    {
        $payment = Payment::find($id);
        return $payment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $payment = Payment::find($id);
        $payment->delete();
        echo "deleted successfully";
    }
}
