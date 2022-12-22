<?php

namespace App\Http\Controllers;

use App\Models\PaymentTerm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class PaymentTermController extends Controller
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
    public function savePaymentTerm(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $paymentTerm = new PaymentTerm();
        $paymentTerm->name = $req->name;
        $paymentTerm->save();
        echo "successfully submitted";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showPaymentTerm(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return PaymentTerm::where('payment_terms.name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return PaymentTerm::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePaymentTerm(Request $req, $id)
    {
        $paymentTerm = PaymentTerm::find($id);
        $paymentTerm->name = $req->name;
        $paymentTerm->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showPaymentTermById(Request $request, $id)
    {
        $paymentTerm = PaymentTerm::find($id);
        return $paymentTerm;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $paymentTerm = PaymentTerm::find($id);
        $paymentTerm->delete();
        echo "deleted successfully";
    }
}
