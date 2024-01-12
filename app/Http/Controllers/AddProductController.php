<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddProductRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddProductController extends Controller
{
    public function index(){
        return Inertia::render("addProduct");
    }

    public function store(AddProductRequest $request){
        $path = $request->file('photo')->store('public');
        $user = Auth::id();
        User::find($user)->product()->create([
            'name' => $request->name,
            'stock' => $request->stock,
            'price' => $request->price,
            'description' => $request->description,
            'photo' => $path
        ]);
    }
}
