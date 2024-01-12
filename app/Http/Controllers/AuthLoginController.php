<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthLoginController extends Controller
{
    public function index(){
        return Inertia::render("auth/login");
    }

    public function store(LoginRequest $request){
        $credentials = $request->only("email", 'password');
        if(Auth::attempt($credentials)){
            return redirect("/");
        }

        return back()->withErrors([
            "password" => "Password doesn't match!"
        ]);
    }
}
