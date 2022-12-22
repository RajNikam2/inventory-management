<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class SuppliersController extends Controller
{
    private $searchSuppliersArray = array('suppliers.organization', 'suppliers.address', 'countries.country_name', 'types.type_name');
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
    public function saveSupplier(Request $req)
    {
        $supplier = new Supplier();
        $supplier->organization = $req->organization;
        $supplier->address = $req->address;
        $supplier->notes = $req->notes;
        $supplier->country_id = $req->country_id;
        $supplier->type_id = $req->type_id;
        $supplier->save();
        echo "success";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSuppliers(Request $req)
    {
        $requestParam = $req->all();

        $query = DB::table('suppliers')
            ->join('countries', 'countries.id', '=', 'suppliers.country_id')
            ->join('types', 'types.id', '=', 'suppliers.type_id');
        if (!empty($requestParam)) {
            // $query

            foreach ($this->searchSuppliersArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        } else {
            return $query->clone()->get();
        }
        return $query->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSupplierById($id)
    {
        $tm = Supplier::join('countries', 'countries.id', '=', 'suppliers.country_id')
            ->join('types', 'types.id', '=', 'suppliers.type_id')
            ->where('suppliers.id', '=', $id);

        return $tm->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSupplier(Request $req, $id)
    {
        $supplier = Supplier::find($id);
        $supplier->organization = $req->organization;
        $supplier->address = $req->address;
        $supplier->notes = $req->notes;
        $supplier->country_id = $req->country_id;
        $supplier->type_id = $req->type_id;
        $supplier->update();
        echo "effected successfully";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $supplier = Supplier::find($id);
        $supplier->delete();
        echo "deleted successfully";
    }
}