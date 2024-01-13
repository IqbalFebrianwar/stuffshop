<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(){
        return Inertia::render("search");
    }

    public function searchQuery($query){
        return Inertia::render("search", [
            'product' => Product::where("name", "like", "%" . $query . "%")->orderBy("name", "asc")->get()->map(function($e){
                return [
                    'id' => $e->id,
                    'name' => $e->name,
                    'price' => $e->price,
                    'photo' => Storage::url($e->photo),
                    'id_user' => $e->id_user
                ];
            }),
            'query' => $query
        ]);
    }
}
