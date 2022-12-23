<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\TeamMembersController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\SuppliersController;
use App\Http\Controllers\SalesTypeController;
use App\Http\Controllers\DeliveryTermController;
use App\Http\Controllers\PaymentTermController;
use App\Http\Controllers\DeliveryTimeController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('customers', [CustomerController::class, 'showCustomers']);
Route::post('customers', [CustomerController::class, 'saveCustomer']);
Route::get('customers/{id}', [CustomerController::class, 'showCustomerById']);
Route::patch('customers/{id}', [CustomerController::class, 'updateCustomer']);
Route::delete('customers/{id}', [CustomerController::class, 'deleteCustomer']);

Route::get('orders', [CustomerController::class, 'showOrders']);
Route::get('order', [CustomerController::class, 'getOrders']);
Route::post('orders', [CustomerController::class, 'saveOrder']);
Route::get('orders/{id}', [CustomerController::class, 'showOrderById']);
Route::patch('orders/{id}', [CustomerController::class, 'updateOrder']);
Route::delete('orders/{id}', [CustomerController::class, 'deleteOrder']);

// Route::post('/savecustomer', [CustomerController::class, 'saveCustomer']);
// Route::get('showcustomer/{name}', [CustomerController::class, 'showCustomer']);
// Route::get('search/{id}', [CustomerController::class, 'Search']);
// Route::get('searchteammember/{id}', [CustomerController::class, 'SearchTeamMember']);
// Route::get('searchng/{countryid}/{teamid}', [CustomerController::class, 'Searching']);
// Route::patch('/updatecustomer/{id}', [CustomerController::class, 'updateCustomer']);
// Route::delete('/deletecustomer/{id}', [CustomerController::class, 'deleteCustomer']);
// Route::get('/showcustomerbyid/{id}', [CustomerController::class, 'showCustomerById']);





Route::post('/saveindustry', [IndustryController::class, 'saveIndustry']);
Route::get('/showindustry', [IndustryController::class, 'showIndustry']);
Route::get('/showbyidindustry/{id}', [IndustryController::class, 'showByIdIndustry']);
Route::delete('/deleteindustry/{id}', [IndustryController::class, 'deleteIndustry']);
Route::patch('/updateindustry/{id}', [IndustryController::class, 'updateIndustry']);

Route::post('/countries', [CountryController::class, 'saveCountry']);
Route::get('/countries', [CountryController::class, 'showCountry']);
Route::get('/countries/{id}', [CountryController::class, 'showByIdCountry']);
Route::delete('/countries/{id}', [CountryController::class, 'deleteCountry']);
Route::patch('/countries/{id}', [CountryController::class, 'updateCountry']);


Route::post('/savetype', [TypeController::class, 'saveType']);
Route::get('/showtype', [TypeController::class, 'showType']);
Route::get('/showbyidtype/{id}', [TypeController::class, 'showByIdType']);
Route::delete('/deletetype/{id}', [TypeController::class, 'deleteType']);
Route::patch('/updatetype/{id}', [TypeController::class, 'updateType']);

Route::post('/saveteammember', [TeamMembersController::class, 'saveTeamMember']);
Route::get('/showteammember', [TeamMembersController::class, 'showTeamMember']);
Route::get('/showbyidteammember/{id}', [TeamMembersController::class, 'showByIdTeamMember']);
Route::patch('/updateteammember/{id}', [TeamMembersController::class, 'updateTeamMember']);
Route::delete('/deletetype/{id}', [TeamMembersController::class, 'destroy']);

Route::post('/savedivision', [DivisionController::class, 'saveDivision']);
Route::get('/showdivision', [DivisionController::class, 'showDivision']);
Route::patch('/updatedivision/{id}', [DivisionController::class, 'updateDivision']);
Route::get('/showbyiddivision/{id}', [DivisionController::class, 'showByIdDivision']);
Route::delete('/deletedivision/{id}', [DivisionController::class, 'destroy']);

Route::post('/savesupplier', [SuppliersController::class, 'saveSupplier']);
Route::get('/showsuppliers', [SuppliersController::class, 'showSuppliers']);
Route::patch('/updatesupplier/{id}', [SuppliersController::class, 'updateSupplier']);
Route::get('/showsupplierbyid/{id}', [SuppliersController::class, 'showSupplierById']);
Route::delete('/deletesupplier/{id}', [DivisionController::class, 'destroy']);


Route::post('/savesalestype', [SalesTypeController::class, 'saveSalesType']);
Route::get('/showsalestype', [SalesTypeController::class, 'showSalesType']);
Route::patch('/updatesalestype/{id}', [SalesTypeController::class, 'updateSalesType']);
Route::get('/showsalestypebyid/{id}', [SalesTypeController::class, 'showSalesTypeById']);
Route::delete('/deletesalestype/{id}', [SalesTypeController::class, 'destroy']);

Route::post('/savepaymentterm', [PaymentTermController::class, 'savePaymentTerm']);
Route::get('/showpaymentterm', [PaymentTermController::class, 'showPaymentTerm']);
Route::patch('/updatepaymentterm/{id}', [PaymentTermController::class, 'updatePaymentTerm']);
Route::get('/showpaymenttermbyid/{id}', [PaymentTermController::class, 'showPaymentTermById']);
Route::delete('/deletePaymentTerm/{id}', [PaymentTermController::class, 'destroy']);

Route::post('/deliveryterm', [DeliveryTermController::class, 'saveDeliveryTerm']);
Route::get('/deliveryterms', [DeliveryTermController::class, 'showDeliveryTerms']);
Route::patch('/deliveryterm/{id}', [DeliveryTermController::class, 'updateDeliveryTerm']);
Route::get('/deliveryterm/{id}', [DeliveryTermController::class, 'showDeliveryTermById']);
Route::delete('/deliveryterm/{id}', [DeliveryTermController::class, 'destroy']);

Route::post('/deliverytime', [DeliveryTimeController::class, 'saveDeliveryTime']);
Route::get('/deliverytimes', [DeliveryTimeController::class, 'showDeliveryTimes']);
Route::patch('/deliverytime/{id}', [DeliveryTimeController::class, 'updateDeliveryTime']);
Route::get('/deliverytime/{id}', [DeliveryTimeController::class, 'showDeliveryTimeById']);
Route::delete('/deliverytime/{id}', [DeliveryTimeController::class, 'destroy']);

Route::post('/region', [RegionController::class, 'saveRegion']);
Route::get('/regions', [RegionController::class, 'showRegions']);
Route::patch('/region/{id}', [RegionController::class, 'updateRegion']);
Route::get('/region/{id}', [REgionController::class, 'showRegionById']);
Route::delete('/region/{id}', [RegionController::class, 'destroy']);

Route::post('/category', [CategoryController::class, 'saveCategory']);
Route::get('/categories', [CategoryController::class, 'showCategory']);
Route::patch('/category/{id}', [CategoryController::class, 'updateCategory']);
Route::get('/category/{id}', [CategoryController::class, 'showCategoryById']);
Route::delete('/category/{id}', [CategoryController::class, 'destroy']);

Route::post('/subcategory', [SubCategoryController::class, 'saveSubCategory']);
Route::get('/subcategories', [SubCategoryController::class, 'showSubCategory']);
Route::patch('/subcategory/{id}', [SubCategoryController::class, 'updateSubCategory']);
Route::get('/subcategory/{id}', [SubCategoryController::class, 'showSubCategoryById']);
Route::delete('/subcategory/{id}', [SubCategoryController::class, 'destroy']);

Route::post('/product', [ProductController::class, 'saveProduct']);
Route::get('/products', [ProductController::class, 'showproducts']);
Route::patch('product/{id}', [ProductController::class, 'updateProduct']);
Route::get('/product/{id}', [ProductController::class, 'ShowProductById']);
