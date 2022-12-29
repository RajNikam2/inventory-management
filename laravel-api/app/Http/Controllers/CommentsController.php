<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CommentsController extends Controller
{
    private $searchCommentsArray = array('comments.comment', 'comments.action', 'comments.order_id');

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
    public function saveComment(Request $req)
    {
        $comment = new Comment();
        $comment->comment = $req->comment;
        $comment->action = $req->action;
        $comment->order_id = $req->order_id;
        $comment->save();
        return  $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getComment(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('comments')->join('orders', 'orders.id', '=', 'comments.order_id');

        if (!empty($requestParam)) {
            // $query
            foreach ($this->searchCommentsArray as $f) {
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
    public function showCommentById($id)
    {
        return Comment::where('comments.id', '=', $id)
            ->join('orders', 'orders.id', '=', 'comments.order_id')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateComment(Request $req, $id)
    {
        $comment = Comment::find($id);
        $comment->comment = $req->comment;
        $comment->action = $req->action;
        $comment->order_id = $req->order_id;
        $comment->update();
        return $comment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        echo "deleted successfully";
    }
}
