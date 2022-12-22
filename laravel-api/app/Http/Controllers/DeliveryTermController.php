<?php

namespace App\Http\Controllers;

use App\Models\DeliveryTerm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeliveryTermController extends Controller
{

    public function saveDeliveryTerm(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $deliveryTerm = new DeliveryTerm();
        $deliveryTerm->name = $req->name;
        $deliveryTerm->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDeliveryTerms(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return DeliveryTerm::where('delivery_terms.name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return DeliveryTerm::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateDeliveryTerm(Request $req, $id)
    {
        $deliveryTerm = DeliveryTerm::find($id);
        $deliveryTerm->name = $req->name;
        $deliveryTerm->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDeliveryTermById(Request $request, $id)
    {
        $deliveryTerm = DeliveryTerm::find($id);
        return $deliveryTerm;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deliveryTerm = DeliveryTerm::find($id);
        $deliveryTerm->delete();
        echo "deleted successfully";
    }
}
