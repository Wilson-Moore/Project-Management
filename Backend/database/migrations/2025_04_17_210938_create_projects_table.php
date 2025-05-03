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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->text("objectif");
            $table->unsignedBigInteger("cost");
            $table->dateTime("start_date");
            $table->string("duration");
            $table->dateTime("assessment_date");
            $table->string("operation_number");
            $table->timestamps();
            $table->softDeletes();


            $table->foreign("operation_number")->references("number")->on("operations")->onDelete("cascade")->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
