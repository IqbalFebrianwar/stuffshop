<?php

use App\Http\Controllers\DetailProductController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
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

Route::get("/", [HomeController::class, 'index']);
Route::get('/profile', [ProfileController::class, 'index']);
Route::get("/search", [SearchController::class, 'index']);
Route::get("/search/{query}", [SearchController::class, 'searchQuery']);
Route::get("/product/{id}", [DetailProductController::class, 'index']);