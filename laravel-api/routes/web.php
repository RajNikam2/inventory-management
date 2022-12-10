<?php

use App\Http\Controllers\CustomerController;
use App\Http\Livewire\InventoryMngmt;
use App\Models\CreateCustomer;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('livewire.inventory-mngmt');
// });
Route::view('/', 'welcome');

Route::post('savecustomer', [CustomerController::class, 'saveCustomer']);
Route::get('showcustomer', [CustomerController::class, 'showcustomer']);
// Route::get('/', [CustomerController::class, 'welcome']);