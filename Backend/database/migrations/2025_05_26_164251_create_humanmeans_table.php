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
        Schema::create('humanmeans', function (Blueprint $table) {
            $table->string("cnas")->primary();
            $table->string("family_name");
            $table->string("name");
            $table->string("employer");
            $table->string("project_id")->nullable();
            $table->timestamps();

            $table->foreign("employer")->references("nif")->on("partners")->onUpdate("cascade")->nullOnDelete();
            $table->foreign("project_id")->references("id")->on("projects")->onDelete("cascade")->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('humanmeans');
    }
};
