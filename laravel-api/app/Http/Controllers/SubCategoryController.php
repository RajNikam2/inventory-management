<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class SubCategoryController extends Controller
{
    public function saveSubCategory(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'sub_category_name' => 'required',
            'category_id' => 'required | numeric'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json($errors);
        }

        $subcategory = new SubCategory();
        $subcategory->sub_category_name = $req->sub_category_name;
        $subcategory->category_id = $req->category_id;
        $subcategory->save();
        echo "successfully submitted";
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSubCategory(Request $req)
    {
        $requestParam = $req->all();
        if (!empty($requestParam)) {
            return SubCategory::join('categories', 'categories.id', '=', 'sub_categories.category_id')
                ->where('sub_categories.sub_category_name', 'like', '%' . $requestParam['q'] . '%')
                ->get();
        } else {
            return DB::table('sub_categories')->join('categories', 'categories.id', '=', 'sub_categories.category_id')
                ->get();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSubCategory(Request $req, $id)
    {
        $subcategory = SubCategory::find($id);
        $subcategory->sub_category_name = $req->sub_category_name;
        $subcategory->update();
        echo "affected successfully";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showSubCategoryById(Request $request, $id)
    {
        $subcategory = SubCategory::find($id);
        return $subcategory;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subcategory = SubCategory::find($id);
        $subcategory->delete();
        echo "deleted successfully";
    }
}
