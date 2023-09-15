<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Model;

class Matiere extends Model
{
    use UUID;

    protected $fillable = [
        'abreviation', 'nom',
    ];
}
