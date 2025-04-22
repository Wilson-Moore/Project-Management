<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $wallet_codes=DB::table('wallets')->pluck('code')->toArray();

        if (empty($wallet_codes)) {
            $this->command->warn('No wallets found. Please seed wallets first.');
            return;
        }

        $programs=[];

        for ($i=0;$i<50;$i++) {
            $code=Str::upper(Str::random(3));
            while (in_array($code,array_column($programs,'code'))) {
                $code = Str::upper(Str::random(3));
            }

            $programs[]=[
                'code'=>$code,
                'title'=>'Program '.($i + 1),
                'wallet_code'=>$wallet_codes[array_rand($wallet_codes)],
                'created_at'=>now(),
                'updated_at'=>now(),
            ];
        }

        DB::table('programs')->insert($programs);
    }
}