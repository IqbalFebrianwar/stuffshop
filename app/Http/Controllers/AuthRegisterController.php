<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterStoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthRegisterController extends Controller
{
    public function index(){
        return Inertia::render("auth/register");
    }

    public function store(RegisterStoreRequest $request){
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'telp' => $request->telp,
            'address' => '',
            'password' => Hash::make($request->password)
        ]);

        return redirect("auth/register");
    }
}
