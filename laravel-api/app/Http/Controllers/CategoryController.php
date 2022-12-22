<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    public function saveCategory(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'category_name' => 'required'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $category = new Category();
        $category->category_name = $req->category_name;
        $category->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showCategory(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return Category::where('categories.category_name', 'like', '%' . $requestParam['q'] . '%')->get();
        } else {
            return Category::all();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCategory(Request $req, $id)
    {
        $category = Category::find($id);
        $category->category_name = $req->category_name;
        $category->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showCategoryById(Request $request, $id)
    {
        $category = Category::find($id);
        return $category;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        echo "deleted successfully";
    }
}
