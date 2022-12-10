<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\TypeController;

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
Route::post('/savecustomer', [CustomerController::class, 'saveCustomer']);

Route::post('/savecountry', [CountryController::class, 'saveCountry']);
Route::get('/showcountry/{id}', [CountryController::class, 'showCountry']);
Route::delete('/deletecountry/{id}', [CountryController::class, 'deleteCountry']);
Route::patch('/updatecountry/{id}', [CountryController::class, 'updateCountry']);


Route::post('/saveindustry', [IndustryController::class, 'saveIndustry']);
Route::get('/showindustry', [IndustryController::class, 'showIndustry']);

Route::post('/savetype', [TypeController::class, 'saveType']);
