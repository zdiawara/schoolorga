<?php

namespace App\Http\Services;

use App\Models\Structure;

class StructureService
{
    public function create(array $body)
    {
        return Structure::create($body);
    }

    public function update(Structure $structure, array $body)
    {
        $structure->update($body);
        return $structure;
    }
}
