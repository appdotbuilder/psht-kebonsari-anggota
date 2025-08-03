<?php

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample members
        Member::factory()->count(25)->create();
        
        // Create some specific members with known data
        Member::create([
            'nama_lengkap' => 'Ahmad Sudrajat',
            'niw' => 'NIW00001',
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Malang',
            'tanggal_lahir' => '1985-05-15',
            'pendidikan_terakhir' => 'S1',
            'pekerjaan' => 'Guru',
            'alamat' => 'Jl. Raya Kebonsari No. 123, RT 02 RW 05, Kebonsari, Malang',
            'nomor_hp' => '081234567890',
            'jabatan' => 'Ketua Ranting',
            'tahun_pengesahan_tingkat_1' => 2010,
            'tahun_pengesahan_tingkat_2' => 2015,
            'rayon_sub_rayon' => 'Rayon Kebonsari 1',
        ]);

        Member::create([
            'nama_lengkap' => 'Siti Nurhaliza',
            'niw' => 'NIW00002',
            'jenis_kelamin' => 'perempuan',
            'tempat_lahir' => 'Malang',
            'tanggal_lahir' => '1990-08-20',
            'pendidikan_terakhir' => 'SMA',
            'pekerjaan' => 'Karyawan Swasta',
            'alamat' => 'Jl. Kebonsari Indah No. 456, RT 03 RW 02, Kebonsari, Malang',
            'nomor_hp' => '082345678901',
            'jabatan' => 'Sekretaris',
            'tahun_pengesahan_tingkat_1' => 2015,
            'tahun_pengesahan_tingkat_2' => null,
            'rayon_sub_rayon' => 'Rayon Kebonsari 2',
        ]);

        Member::create([
            'nama_lengkap' => 'Budi Santoso',
            'niw' => 'NIW00003',
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Surabaya',
            'tanggal_lahir' => '1988-12-10',
            'pendidikan_terakhir' => 'D3',
            'pekerjaan' => 'Wiraswasta',
            'alamat' => 'Jl. Mawar No. 789, RT 01 RW 03, Kebonsari, Malang',
            'nomor_hp' => '083456789012',
            'jabatan' => 'Bendahara',
            'tahun_pengesahan_tingkat_1' => 2012,
            'tahun_pengesahan_tingkat_2' => 2018,
            'rayon_sub_rayon' => 'Sub Rayon A',
        ]);

        Member::create([
            'nama_lengkap' => 'Dewi Sartika',
            'niw' => 'NIW00004',
            'jenis_kelamin' => 'perempuan',
            'tempat_lahir' => 'Kediri',
            'tanggal_lahir' => '1992-03-25',
            'pendidikan_terakhir' => 'S1',
            'pekerjaan' => 'Perawat',
            'alamat' => 'Jl. Anggrek No. 321, RT 04 RW 01, Kebonsari, Malang',
            'nomor_hp' => '084567890123',
            'jabatan' => 'Sie Kepelatihan',
            'tahun_pengesahan_tingkat_1' => 2018,
            'tahun_pengesahan_tingkat_2' => null,
            'rayon_sub_rayon' => 'Sub Rayon B',
        ]);

        Member::create([
            'nama_lengkap' => 'Eko Prasetyo',
            'niw' => 'NIW00005',
            'jenis_kelamin' => 'laki-laki',
            'tempat_lahir' => 'Blitar',
            'tanggal_lahir' => '1987-11-08',
            'pendidikan_terakhir' => 'SMA',
            'pekerjaan' => 'PNS',
            'alamat' => 'Jl. Melati No. 654, RT 05 RW 04, Kebonsari, Malang',
            'nomor_hp' => '085678901234',
            'jabatan' => 'Anggota Biasa',
            'tahun_pengesahan_tingkat_1' => 2013,
            'tahun_pengesahan_tingkat_2' => 2020,
            'rayon_sub_rayon' => 'Rayon Kebonsari 1',
        ]);
    }
}