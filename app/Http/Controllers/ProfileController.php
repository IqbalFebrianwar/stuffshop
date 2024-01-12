<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class ProfileController extends Controller
{
    public function index(){
        $idUser = Auth::id();
        $product = User::find($idUser)->product()->orderBy("created_at", "desc")->get();
        return Inertia::render("profile", [
            'user' => auth()->user(),
            'product' => $product->map(function($e){ return ["id" => $e->id, "name" => $e->name, "stock" => $e->stock, "price" => $e->price, "description" => $e->description, "photo" => Storage::url($e->photo)]; })
        ]);
    }
}
