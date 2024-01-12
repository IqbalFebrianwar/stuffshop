<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render("home", [
            "product" => Product::with("user")->orderBy("created_at", "desc")->get()->map(function($e){ return ["id" => $e->id, "id_user" => $e->id_user, "name" => $e->name, "stock" => $e->stock, "price" => $e->price, "description" => $e->description, "photo" => Storage::url($e->photo)]; })
        ]);
    }
}
