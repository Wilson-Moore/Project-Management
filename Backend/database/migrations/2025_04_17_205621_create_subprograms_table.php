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
        Schema::create('subprograms', function (Blueprint $table) {
            $table->id();
            $table->string("code",2);
            $table->string("title");
            $table->string("program_code");
            $table->timestamps();
            $table->softDeletes();

            $table->foreign("program_code")->references("code")->on("programs")->onDelete("cascade")->onUpdate("cascade");
            $table->unique(["code","program_code"]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subprograms');
    }
};
