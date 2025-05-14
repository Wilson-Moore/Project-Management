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
        Schema::create('partners', function (Blueprint $table) {
            $table->string("nif")->primary();
            $table->string("company_name");
            $table->string("address")->nullable();
            $table->string("mobile1")->unique()->nullable();
            $table->string("mobile2")->unique()->nullable();
            $table->string("phone")->unique()->nullable();
            $table->string("email")->unique()->nullable();
            $table->smallInteger("status")->nullable();
            $table->string("city")->nullable();
            $table->string("fax")->unique()->nullable();
            $table->smallInteger("domain")->nullable();
            $table->smallInteger("category")->nullable();
            $table->boolean("micro")->default(false)->nullable();
            $table->string("trade_register")->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
