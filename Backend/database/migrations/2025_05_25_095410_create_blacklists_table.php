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
        Schema::create('blacklists', function (Blueprint $table) {
            $table->id();
            $table->dateTime("entry_date");
            $table->dateTime("exit_date");
            $table->string("reason")->nullable();
            $table->text("observation")->nullable();
            $table->string("partner_nif")->unique();
            $table->timestamps();

            $table->foreign("partner_nif")->references("nif")->on("partners")->onDelete("cascade")->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blacklists');
    }
};
