<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailProductController extends Controller
{
    public function index($id){
        return Inertia::render("product");
    }
}
