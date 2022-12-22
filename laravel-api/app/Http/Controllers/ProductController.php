<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    private $searchProductsArray = array('categories.category_name', 'sub_categories.sub_category_name');
    // public $query = DB::table('products')
    //     ->join('categories', 'categories.id', '=', 'products.category_id')
    //     ->join('sub_categories', 'sub_categories.id', '=', 'products.sub_category_id');


    function saveProduct(Request $req)
    {
        $product = new Product();
        $product->description = $req->description;
        $product->category_id = $req->category_id;
        $product->sub_category_id = $req->sub_category_id;
        $product->save();
        echo "success";
    }

    function showProducts(Request $req)
    {
        $requestParam = $req->all();
        $query = DB::table('products')
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->join('sub_categories', 'sub_categories.id', '=', 'products.sub_category_id');

        if (!empty($requestParam)) {
            foreach ($this->searchProductsArray as $f) {
                $query->orWhere($f, 'like', "%" . $requestParam['q'] . "%");
            }
        } else {
            return $query->clone()->get();
        }
        return $query->get();
    }

    function ShowProductById($id)
    {
        return DB::table('products')
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->join('sub_categories', 'sub_categories.id', '=', 'products.sub_category_id')
            ->where('products.id', '=', $id)->get();
    }
}
