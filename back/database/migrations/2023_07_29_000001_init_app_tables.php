<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('structures', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom')->unique();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('matieres', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('abreviation');
            $table->uuid('structure_id');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('structure_id')->references('id')->on('structures');
        });

        Schema::create('classes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->integer('abreviation');
            $table->uuid('classe_id');
            $table->uuid('structure_id');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('structure_id')->references('id')->on('structures');
        });

        Schema::create('classes_matieres', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classe_id');
            $table->uuid('matiere_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('classe_id')->references('id')->on('classes');
            $table->foreign('matiere_id')->references('id')->on('matieres');
        });

        Schema::create('annees_scolaires', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
        });

        /* Schema::create('enseignements', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classe_id');
            $table->uuid('matiere_id');
            $table->uuid('enseignant_id');
            $table->uuid('annee_scolaire_id');
            $table->timestamps();
            $table->softDeletes();
        });


        Schema::create('etudiants', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('prenom');
            $table->uuid('genre_id');
            $table->date('date_naissance')->nullable();
            $table->string('lieu_naissance')->nullable();
        });

        Schema::create('etudiants_classes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classe_id');
            $table->uuid('etudiant_id');
            $table->uuid('annee_scolaire_id');
            $table->timestamps();

            $table->foreign('classe_id')->references('id')->on('classes');
            $table->foreign('etudiant_id')->references('id')->on('etudiants');
            $table->foreign('annee_scolaire_id')->references('id')->on('annees_scolaires');
        });


        Schema::create('etudiants_classes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classe_id');
            $table->uuid('etudiant_id');
            $table->uuid('annee_scolaire_id');
            $table->timestamps();

            $table->foreign('classe_id')->references('id')->on('classes');
            $table->foreign('etudiant_id')->references('id')->on('etudiants');
            $table->foreign('annee_scolaire_id')->references('id')->on('annees_scolaires');
        });


        Schema::create('controles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom')->nullable();
            $table->uuid('annee_scolaire_id');
            $table->timestamps();

            $table->foreign('annee_scolaire_id')->references('id')->on('annees_scolaires');
        });

        Schema::create('notes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('etudiant_id');
            $table->uuid('controle_id');
            $table->uuid('matiere_id');
            $table->uuid('classe_id');
            $table->uuid('annee_scolaire_id');
            $table->timestamps();

            $table->foreign('controle_id')->references('id')->on('controles');
            $table->foreign('classe_id')->references('id')->on('classes');
            $table->foreign('etudiant_id')->references('id')->on('etudiants');
            $table->foreign('annee_scolaire_id')->references('id')->on('etudiants_id');
        });

        Schema::create('emplois_du_temps', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('classe_id');
            $table->json('events'); // Enseignants; matieres ...
            $table->timestamps();

            $table->foreign('classe_id')->references('id')->on('classes');
        }); */
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
    }
};
