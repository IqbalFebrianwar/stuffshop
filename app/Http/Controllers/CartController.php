<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(){
        return Inertia::render("cart", [
            "product" => User::find(Auth::id())->cart()->with('product')->get()
        ]);
    }

    public function store(Request $req){
        Cart::create([
            'id_user' => Auth::id(),
            "id_product" => $req->id_product,
            "amount" => $req->amount
        ]);
    }
}
