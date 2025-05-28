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
        Schema::create('orders', function (Blueprint $table) {
            $table->string("register_number")->primary();
            $table->integer("number");
            $table->datetimes("signature_date");
            $table->datetimes("notification_date");
            $table->integer("type");
            $table->string("project_id");
            $table->timestamps();

            $table->foreign("project_id")->references("id")->on("projects")->onDelete("cascade")->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
