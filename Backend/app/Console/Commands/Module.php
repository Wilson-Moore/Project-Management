<?php

namespace App\Console\Commands;

use Illuminate\Support\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class Module extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:module {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name=Str::studly($this->argument('name'));

        Artisan::call("make:model $name -mcr --api");
        $this->output->write(Artisan::output());

        Artisan::call("make:request {$name}/Show{$name}Request");
        Artisan::call("make:request {$name}/Store{$name}Request");
        Artisan::call("make:request {$name}/Update{$name}Request");
        $this->output->write(Artisan::output());

        Artisan::call("make:resource {$name}/{$name}Resource");
        Artisan::call("make:resource {$name}/{$name}Collection");
        $this->output->write(Artisan::output());

        Artisan::call("make:trait {$name}/{$name}Includes");
        Artisan::call("make:trait {$name}/{$name}ValidationRules");
        $this->output->write(Artisan::output());

        Artisan::call("make:class Filters/{$name}Filter");
        Artisan::call("make:class Services/{$name}Service");
        $this->output->write(Artisan::output());
    }
}
