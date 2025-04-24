<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Subprogram;

class ActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $actions=[];
        $subprograms=Subprogram::with('program.wallet')->get();

        foreach ($subprograms->take(10) as $subprogram) {
            $program=$subprogram->program;
            $wallet=$program->wallet;

            for ($i=1;$i<=10;$i++) {
                $type=(string)rand(1,3);
                $action=str_pad((string)rand(1,9999),4,'0',STR_PAD_LEFT);
                $sub_action=str_pad((string)rand(1,999),3,'0',STR_PAD_LEFT);
                $space=str_pad((string)rand(1,58),3,'0',STR_PAD_LEFT);

                $code="{$wallet->code}{$program->code}{$subprogram->code}{$action}{$sub_action}{$space}";

                $actions[]=[
                    'code'=>$code,
                    'type'=>$type,
                    'subprogram_id'=>$subprogram->id,
                    'created_at'=>now(),
                    'updated_at'=>now(),
                ];
            }
        }

        DB::table('actions')->insert($actions);
    }
}