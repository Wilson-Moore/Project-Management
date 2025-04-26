<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SubProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $program_codes=DB::table('programs')->pluck('code')->toArray();

        if (empty($program_codes)) {
            $this->command->warn('No programs found. Please seed programs first.');
            return;
        }

        $subprograms=[];

        for ($i=0;$i<200;$i++) {
            $code=Str::upper(Str::random(2));
            while (in_array($code,array_column($subprograms,'code'))) {
                $code = Str::upper(Str::random(2));
            }

            $subprograms[]=[
                'code'=>$code,
                'title'=>'SubProgram '.($i + 1),
                'program_code'=>$program_codes[array_rand($program_codes)],
                'created_at'=>now(),
                'updated_at'=>now(),
            ];
        }

        DB::table('subprograms')->insert($subprograms);
    }
}