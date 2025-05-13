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
        Schema::create('notices', function (Blueprint $table) {
            $table->id();
            $table->dateTime("arab_publication_date")->nullable();
            $table->dateTime("french_publication_date")->nullable();
            $table->dateTime("BOMOP_date")->nullable();
            $table->text("observation")->nullable();
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
        Schema::dropIfExists('notices');
    }
};
