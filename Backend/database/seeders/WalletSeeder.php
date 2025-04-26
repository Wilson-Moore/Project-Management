<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $wallets=[];

        for ($i=0;$i<25;$i++) {
            $code=Str::upper(Str::random(3));
            while (in_array($code,array_column($wallets,'code'))) {
                $code = Str::upper(Str::random(3));
            }

            $wallets[]=[
                'code'=>$code,
                'title'=>'Wallet '.($i + 1),
                'created_at'=>now(),
                'updated_at'=>now(),
            ];
        }

        DB::table('wallets')->insert($wallets);
    }
}