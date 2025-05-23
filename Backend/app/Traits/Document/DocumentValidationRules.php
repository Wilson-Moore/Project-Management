<?php

namespace App\Traits\Document;

trait DocumentValidationRules
{
    protected function base_rules(): array
    {
        return [
            'document'=>['required','file','mimes:pdf,docx,csv,txt','max:10240',],
        ];
    }
}