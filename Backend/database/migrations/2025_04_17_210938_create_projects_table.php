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
            $table->text("objectif")->nullable();
            $table->unsignedBigInteger("cost")->nullable();
            $table->string("duration")->nullable();
            $table->string("operation_number");
            $table->string("co_contractor")->nullable();
            $table->timestamps();
            $table->softDeletes();


            $table->foreign("operation_number")->references("number")->on("operations")->onDelete("cascade")->onUpdate("cascade");
            $table->foreign("co_contractor")->references("nif")->on("partners")->onUpdate("cascade")->nullOnDelete();
            $table->index("operation_number");
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
