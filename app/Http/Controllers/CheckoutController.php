<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckoutRequest;
use App\Models\Checkout;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        $dataSession = session()->get("checkout");
        $idProduct = array_map(function ($item) {
            return $item['id'];
        }, $dataSession);

        return Inertia::render("checkout", [
            'user' => User::find(Auth::id()),
            'product' => Product::whereIn('id', $idProduct)->get()->map(function ($e) use ($dataSession) {
                $key = array_search($e->id, array_column($dataSession, 'id'));
                $amount = $key !== false ? $dataSession[$key]['amount'] : 0;

                return [
                    "id" => $e->id,
                    "name" => $e->name,
                    "price" => $e->price,
                    "photo" => Storage::url($e->photo),
                    "amount" => $amount,
                    "description" => $e->description
                ];
            })
        ]);
    }

    public function updateAddress(CheckoutRequest $req)
    {
        User::find(Auth::id())->update($req->all());
    }

    public function checkout()
    {
        $dataSession = session()->get("checkout");
        $idProduct = array_map(function ($item) {
            return $item['id'];
        }, $dataSession);

        DB::transaction(function () use ($dataSession, $idProduct) {
            $products = Product::whereIn('id', $idProduct)->get();

            foreach ($products as $product) {
                $key = array_search($product->id, array_column($dataSession, 'id'));

                if ($key !== false) {
                    $amount = $dataSession[$key]['amount'];
                    $product->update(['stock' => $product->stock - $amount]);

                    Checkout::create([
                        'id_user' => Auth::id(),
                        'id_product' => $product->id,
                        'amount' => $amount
                    ]);
                }
            }
        });
    }
}
