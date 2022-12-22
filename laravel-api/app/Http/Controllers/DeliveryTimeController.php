<?php

namespace App\Http\Controllers;

use App\Models\DeliveryTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class DeliveryTimeController extends Controller
{

    public function saveDeliveryTime(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'time' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $deliveryTime = new DeliveryTime();
        $deliveryTime->time = $req->time;
        $deliveryTime->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDeliveryTimes(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return DeliveryTime::where('delivery_times.time', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return DeliveryTime::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateDeliveryTime(Request $req, $id)
    {
        $deliveryTime = DeliveryTime::find($id);
        $deliveryTime->time = $req->time;
        $deliveryTime->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showDeliveryTimeById(Request $request, $id)
    {
        $deliveryTime = DeliveryTime::find($id);
        return $deliveryTime;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deliveryTime = DeliveryTime::find($id);
        $deliveryTime->delete();
        echo "deleted successfully";
    }
}
