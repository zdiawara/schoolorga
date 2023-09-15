<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MatiereResource;
use App\Http\Resources\StructureResource;
use App\Http\Services\StructureService;
use App\Models\Matiere;
use App\Models\Structure;
use Illuminate\Http\Request;

class StructureController extends Controller
{

    private StructureService $structureService;

    public function __construct(StructureService $structureService)
    {
        $this->structureService = $structureService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Structure::query();
        return [
            "data" => StructureResource::collection($query->orderBy('nom', 'asc')
                ->get())
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->structureService->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Structure $structure)
    {
        return new StructureResource($structure);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Structure $structure)
    {
        $this->structureService->update($structure, $request->all());
    }
}
