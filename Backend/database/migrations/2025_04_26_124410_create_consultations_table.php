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
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
            $table->dateTime("signature_date");
            $table->dateTime("duration");
            $table->text("observation");
            $table->string("operation_number");
            $table->timestamps();
            $table->softDeletes();


            $table->foreign("operation_number")->references("number")->on("operations")->onDelete("cascade")->onUpdate("cascade");
            $table->index("operation_number");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultations');
    }
};
