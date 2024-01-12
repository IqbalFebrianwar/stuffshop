<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        return Inertia::render("cart", [
            "product" => User::find(Auth::id())->cart()->with('product')->get()->map(function ($e) {
                return [
                    'id' => $e->id,
                    "id_product" => $e->id_product,
                    "amount" => $e->amount,
                    "id_product" => $e->product->id,
                    "name" => $e->product->name,
                    "photo" => Storage::url($e->product->photo),
                    "price" => $e->product->price,
                    "description" => $e->product->description
                ];
            })
        ]);
    }

    public function store(Request $req)
    {
        Cart::create([
            'id_user' => Auth::id(),
            "id_product" => $req->id_product,
            "amount" => $req->amount
        ]);
    }
}
