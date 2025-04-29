<?php

namespace Database\Seeders;

use App\Models\Operation;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects=[];
        $operations=Operation::all();

        for ($i=0;$i<500;$i++) {
            $operation=$operations->random();
            $date=fake()->dateTimeBetween($operation->date_of_notification,'5 years');
            
            $projects[]=[
                'objectif'=>'Project '.($i+1),
                'cost'=>rand(1000,10000),
                'start_date'=>$date,
                'duration'=>$this->generate_duration(),
                'assessment_date'=>fake()->dateTimeBetween($date,'5 years'),
                'operation_number'=>$operation->number,
                'created_at'=>$date,
                'updated_at'=>$date,
            ];
        }

        DB::table('projects')->insert($projects);
    }

    private function generate_duration(): string
    {
        $months=rand(0,12);
        $days=rand(0,30);

        $duration='P';
        if ($months>0) {
            $duration.=$months.'M';
        }
        if ($days>0) {
            $duration.=$days.'D';
        }

        return $duration==='P'?'P1M':$duration;
    }
}
