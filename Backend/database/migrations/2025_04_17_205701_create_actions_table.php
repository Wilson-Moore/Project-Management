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
        Schema::create('actions', function (Blueprint $table) {
            $table->string("code",18)->primary();
            $table->smallInteger("type");
            $table->string("title");
            $table->integer("subprogram_id");
            $table->timestamps();
            $table->softDeletes();

            
            $table->foreign("subprogram_id")->references("id")->on("subprograms")->onDelete("cascade")->onUpdate("cascade");
            $table->index("subprogram_id");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actions');
    }
};
