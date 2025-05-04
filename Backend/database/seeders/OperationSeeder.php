<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Action;

class OperationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $operations=[];
        $actions=Action::with('subprogram')->get();

        for ($i=0;$i<500;$i++) {
            $action=$actions->random();
            $type=collect(["N","S"])->random();
            $num=(string)rand(1,9);
            $date=fake()->dateTimeBetween('-35 years','now');
            $last_digits=$date->format('y');
            $program_code=substr($action->code,3,3);
            $number="{$type}{$num}{$action->code}{$last_digits}{$program_code}";
            $operations[]=[
                'number'=>$number,
                'title'=>'Operation '.($i+1),
                'date_of_notification'=>$date,
                'initial_ap'=>rand(100000,1000000),
                'current_ap'=>rand(1000000,10000000),
                'action_code'=>$action->code,
                'created_at'=>now(),
                'updated_at'=>now(),
            ];
        }

        DB::table('operations')->insert($operations);
    }
}
