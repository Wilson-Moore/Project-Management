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
            $table->unsignedBigInteger("initial_ap");
            $table->unsignedBigInteger("current_ap")->nullable();
            $table->integer("revaluation")->nullable();
            $table->integer("situation");
            $table->text("observation")->nullable();
            $table->boolean("individualized")->default(false);
            $table->string("action_code");
            $table->timestamps();
            $table->softDeletes();

            
            $table->foreign("action_code")->references("code")->on("actions")->onDelete("cascade")->onUpdate("cascade");
            $table->index("action_code");
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
