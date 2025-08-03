<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        $totalMembers = Member::count();
        $maleMembers = Member::where('jenis_kelamin', 'laki-laki')->count();
        $femaleMembers = Member::where('jenis_kelamin', 'perempuan')->count();
        $members = Member::select('id', 'nama_lengkap', 'niw', 'jenis_kelamin', 'jabatan')
                        ->latest()
                        ->limit(10)
                        ->get();
        
        return Inertia::render('dashboard', [
            'stats' => [
                'total' => $totalMembers,
                'male' => $maleMembers,
                'female' => $femaleMembers,
            ],
            'members' => $members
        ]);
    }
}