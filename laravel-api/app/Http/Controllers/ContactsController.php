<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ContactsController extends Controller
{
    private $searchContactsArray = array('contacts.position', 'contacts.contact_person', 'contacts.contactable_type');

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
    public function saveContacts(Request $req)
    {
        $contacts = new Contact();
        $contacts->contact_person = $req->contact_person;
        $contacts->position = $req->position;
        $contacts->contactable_id = $req->contactable_id;
        $contacts->contactable_type = $req->contactable_type;
        $contacts->save();
        return $contacts;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getContacts(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('contacts');

        if (!empty($requestParam)) {
            foreach ($this->searchContactsArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        }
        $query->orderBy("{$requestParam['sortBy']}", "{$requestParam['sortOrder']}");
        $result = $query->paginate($requestParam['limit']);
        return $result;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showContactsById($id)
    {
        $contact = Contact::find($id);
        return $contact;
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
        $contacts =  Contact::find($id);
        $contacts->contact_person = $req->contact_person;
        $contacts->position = $req->position;
        $contacts->contactable_id = $req->contactable_id;
        $contacts->contactable_type = $req->contactable_type;
        $contacts->update();
        return $contacts;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
        echo "deleted successfully";
    }
}
