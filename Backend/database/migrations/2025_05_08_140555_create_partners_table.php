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
            $table->string("address");
            $table->string("mobile1")->unique()->nullable();
            $table->string("mobile2")->unique()->nullable();
            $table->string("phone")->unique();
            $table->string("email")->unique();
            $table->smallInteger("status");
            $table->string("city");
            $table->string("fax")->unique();
            $table->smallInteger("domain");
            $table->smallInteger("category");
            $table->boolean("micro")->default(false);
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
