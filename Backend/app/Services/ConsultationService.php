<?php

namespace App\Services;

use App\Models\Consultation;

class ConsultationService
{
    public function create_resource(array $data): Consultation
    {
        return Consultation::create($data);
    }

    public function update_resource(Consultation $consultation, array $data): Consultation
    {
        $consultation->update($data);
        return $consultation->refresh();
    }

    public function delete_resource(Consultation $consultation): void
    {
        $consultation->delete();
    }
}