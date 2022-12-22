<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use App\Models\TeamMembers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamMembersController extends Controller
{
    private $searchTeamMemberArray = array(
        'TeamMembers.first_name', 'TeamMembers.last_name', 'TeamMembers.position',
        'TeamMembers.assign_territories', 'countries.country_name'
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
    public function saveTeamMember(Request $req)
    {
        $team_member = new TeamMember();
        $team_member->first_name = $req->first_name;
        $team_member->last_name = $req->last_name;
        $team_member->position = $req->position;
        $team_member->country_id = $req->country_id;
        $team_member->assign_territories = $req->assign_territories;
        $team_member->notes = $req->notes;

        $team_member->save();
        echo "success";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showTeamMember(Request $req)
    {
        $requestParam = $req->all();

        $query = DB::table('TeamMembers')->join('countries', 'countries.id', '=', 'TeamMembers.country_id');
        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchTeamMemberArray as $f) {
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
    public function showByIdTeamMember($id)
    {
        $tm = TeamMember::join('countries', 'countries.id', '=', 'TeamMembers.country_id')
            ->where('TeamMembers.id', '=', $id);
        return $tm->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateTeamMember(Request $req, $id)
    {
        $teamMember = TeamMember::find($id);
        $teamMember->first_name = $req->first_name;
        $teamMember->last_name = $req->last_name;
        $teamMember->notes = $req->notes;
        $teamMember->country_id = $req->country_id;
        $teamMember->position = $req->position;
        $teamMember->assign_territories = $req->assign_territories;
        // echo "comes";exit;
        $teamMember->update();
        echo "teamMember added";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $teamMember = TeamMember::find($id);
        $teamMember->delete();
        echo "deleted successfully";
    }
}
