<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_product");
            $table->unsignedBigInteger("id_user");
            $table->integer("amount");
            $table->timestamps();
            $table->foreign("id_product")->references("id")->on("products")->constrained();
            $table->foreign("id_user")->references("id")->on("users")->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
