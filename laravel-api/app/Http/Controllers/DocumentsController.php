<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class DocumentsController extends Controller
{
    private $searchDocumentsArray = array('documents.courier_service', 'documents.tracking_reference', 'documents.sent_date', 'documents.sent_to', 'documents.recieved_by', 'documents.documentId', 'documents.document_date', 'documents.comment');

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
    public function saveDocuments(Request $req)
    {
        $documents = new Documents();
        $documents->courier_service = $req->courier_service;
        $documents->tracking_reference = $req->tracking_reference;
        $documents->sent_date = $req->sent_date;
        $documents->sent_to = $req->sent_to;
        $documents->recieved_by = $req->recieved_by;
        $documents->documentId = $req->documentId;
        $documents->document_date = $req->document_date;
        $documents->comment = $req->comment;
        $documents->shipment_id = $req->shipment_id;
        $documents->order_id = $req->order_id;
        $documents->save();
        return $documents;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getDocuments(Request $req)
    {
        $requestParam = $req->all();

        $query = DB::table('documents')
            ->join('shipments', 'shipments.id', '=', 'documents.shipment_id')
            ->join('orders', 'orders.id', '=', 'documents.order_id');


        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchDocumentsArray as $f) {
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
    public function showDocumentById($id)
    {
        return Documents::where('documents.id', '=', $id)
            ->join('shipments', 'shipments.id', '=', 'documents.shipment_id')
            ->join('orders', 'orders.id', '=', 'documents.order_id')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateDocuments(Request $req, $id)
    {
        $documents = Documents::find($id);
        $documents->courier_service = $req->courier_service;
        $documents->tracking_reference = $req->tracking_reference;
        $documents->sent_date = $req->sent_date;
        $documents->sent_to = $req->sent_to;
        $documents->recieved_by = $req->recieved_by;
        $documents->documentId = $req->documentId;
        $documents->document_date = $req->document_date;
        $documents->comment = $req->comment;
        $documents->shipment_id = $req->shipment_id;
        $documents->order_id = $req->order_id;
        $documents->update();
        return $documents;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteDocuments($id)
    {
        $document = Documents::find($id);
        $document->delete();
        echo "deleted successfully";
    }
}
