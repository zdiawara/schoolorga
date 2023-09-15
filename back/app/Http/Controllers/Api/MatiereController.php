<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MatiereResource;
use App\Http\Services\MatiereService;
use App\Models\Matiere;
use Illuminate\Http\Request;

class MatiereController extends Controller
{

    private MatiereService $matiereService;

    public function __construct(MatiereService $matiereService)
    {
        $this->matiereService = $matiereService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Matiere::query();
        return [
            "data" => MatiereResource::collection($query->orderBy('nom', 'asc')
                ->get())
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->matiereService->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Matiere $matiere)
    {
        return new MatiereResource($matiere);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Matiere $matiere)
    {
        $this->matiereService->update($matiere, $request->all());
    }
}
