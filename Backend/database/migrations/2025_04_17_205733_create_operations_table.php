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
        Schema::create('operations', function (Blueprint $table) {
            $table->string("number")->primary();
            $table->string("title");
            $table->dateTime("date_of_notification");
            $table->unsignedBigInteger("current_ap");
            $table->unsignedBigInteger("initial_ap");
            $table->boolean("revaluation");
            $table->boolean("situation");
            $table->string("action_code");
            $table->timestamps();
            
            $table->foreign("action_code")->references("code")->on("actions")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operations');
    }
};
