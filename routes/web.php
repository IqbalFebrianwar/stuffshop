<?php

use App\Http\Controllers\AddProductController;
use App\Http\Controllers\AuthLoginController;
use App\Http\Controllers\AuthRegisterController;
use App\Http\Controllers\AuthSignOutController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
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

Route::prefix("/auth")->name("auth.")->group(function(){
    Route::get("/login", [AuthLoginController::class, 'index'])->name("login");
    Route::post("/login", [AuthLoginController::class, 'store']);
    Route::get("/register", [AuthRegisterController::class, 'index'])->name("register");
    Route::put("/register", [AuthRegisterController::class, 'store']);
    Route::post("/signout", [AuthSignOutController::class, 'signout']);
});

Route::middleware("auth:sanctum")->group(function () {
    Route::get("/", [HomeController::class, 'index']);
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::get("/search", [SearchController::class, 'index']);
    Route::get("/search/{query}", [SearchController::class, 'searchQuery']);
    Route::get("/cart", [CartController::class, 'index']);
    Route::put('/cart', [CartController::class, 'store']);
    Route::post('/cart', [CartController::class, 'checkout']);
    Route::delete("/cart/{id}", [CartController::class, 'delete']);
    Route::get("/checkout", [CheckoutController::class, 'index']);
    Route::post("/checkout", [CheckoutController::class, 'updateAddress']);
    Route::put("/checkout", [CheckoutController::class, 'checkout']);
    Route::get("/add-product", [AddProductController::class, 'index']);
    Route::post("/add-product", [AddProductController::class, 'store']);
    Route::get("/{profile_id}/{product_id}", [DetailProductController::class, 'index']);
});