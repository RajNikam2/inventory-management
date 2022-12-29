<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;



class FilesController extends Controller
{
    private $searchfilesArray = array('orders.type_name');
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
    public function saveFiles(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'file_type' => 'required',
            'file_path' => 'required',
            'order_id' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }
        $file = new File();
        $file->file_name = $req->file_name;
        $file->description = $req->description;
        $file->file_type = $req->file_type;
        $file->file_path = $req->file_path;
        $file->order_id = $req->order_id;
        $file->save();
        return $file;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFiles(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('files')->join('orders', 'orders.id', '=', 'files.order_id');

        if (!empty($requestParam)) {

            $query->Where('files.file_name', 'like', "%" . $requestParam['q'] . "%");
        }
        return $query->paginate($requestParam['limit']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showFilesById($id)
    {
        return File::where('files.id', '=', $id)
            ->join('orders', 'orders.id', '=', 'files.order_id')
            ->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateFiles(Request $req, $id)
    {
        $file =  Order::find($id);
        $file->file_name = $req->file_name;
        $file->description = $req->isset($req->description) ? $req->description : null;
        $file->file_type = $req->file_type;
        $file->file_path = $req->file_path;
        $file->order_id = $req->order_id;
        $file->update();
        return $file;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $File = File::find($id);
        $File->delete();
        echo "deleted successfully";
    }
}
