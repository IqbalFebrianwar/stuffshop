<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DetailProductController extends Controller
{
    public function index($profile_id, $product_id)
    {
        $product =  User::find($profile_id)->productHasOne()->where("id", $product_id)->first();
        return Inertia::render("product", [
            "product" => [
                "id" => $product->id,
                "id_user" => $product->id_user,
                "name" => $product->name,
                "stock" => $product->stock,
                "price" => $product->price,
                "description" => $product->description,
                "photo" => Storage::url($product->photo)
            ]
        ]);
    }

    public function checkout(Request $req){
        session(['checkout' => $req->all()]);
    }
}
