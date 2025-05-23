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
        Schema::create('programs', function (Blueprint $table) {
            $table->string("code",3)->primary();
            $table->string("title");
            $table->string("wallet_code");
            $table->timestamps();
            $table->softDeletes();

            
            $table->foreign("wallet_code")->references("code")->on("wallets")->onDelete("cascade")->onUpdate("cascade");
            $table->index("wallet_code");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programs');
    }
};
