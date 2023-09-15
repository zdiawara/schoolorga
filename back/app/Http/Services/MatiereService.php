<?php

namespace App\Http\Services;

use App\Models\Matiere;

class MatiereService
{
    public function create(array $body)
    {
        return Matiere::create($body);
    }

    public function update(Matiere $matiere, array $body)
    {
        $matiere->update($body);
        return $matiere;
    }
}
