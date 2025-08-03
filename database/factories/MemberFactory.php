<?php

namespace Database\Factories;

use App\Models\Member;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Member>
     */
    protected $model = Member::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = $this->faker->randomElement(['laki-laki', 'perempuan']);
        $firstName = $gender === 'laki-laki' 
            ? $this->faker->firstNameMale() 
            : $this->faker->firstNameFemale();

        return [
            'nama_lengkap' => $firstName . ' ' . $this->faker->lastName(),
            'niw' => 'NIW' . str_pad((string) $this->faker->unique()->numberBetween(1, 99999), 5, '0', STR_PAD_LEFT),
            'jenis_kelamin' => $gender,
            'tempat_lahir' => $this->faker->city(),
            'tanggal_lahir' => $this->faker->dateTimeBetween('-60 years', '-17 years'),
            'pendidikan_terakhir' => $this->faker->randomElement(['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3']),
            'pekerjaan' => $this->faker->randomElement([
                'Petani', 'Pedagang', 'Guru', 'PNS', 'Karyawan Swasta', 'Wiraswasta', 
                'Dokter', 'Perawat', 'Mahasiswa', 'Pensiunan'
            ]),
            'alamat' => $this->faker->address(),
            'nomor_hp' => '08' . $this->faker->numerify('##########'),
            'jabatan' => $this->faker->randomElement([
                'Anggota Biasa', 'Ketua Ranting', 'Wakil Ketua', 'Sekretaris', 
                'Bendahara', 'Sie Kepelatihan', 'Sie Organisasi', 'Sie Humas'
            ]),
            'tahun_pengesahan_tingkat_1' => $this->faker->optional(0.8)->numberBetween(2010, 2023),
            'tahun_pengesahan_tingkat_2' => $this->faker->optional(0.4)->numberBetween(2015, 2024),
            'rayon_sub_rayon' => $this->faker->randomElement([
                'Rayon Kebonsari 1', 'Rayon Kebonsari 2', 'Sub Rayon A', 'Sub Rayon B'
            ]),
        ];
    }

    /**
     * Indicate that the member is male.
     *
     * @return static
     */
    public function male(): static
    {
        return $this->state(fn (array $attributes) => [
            'jenis_kelamin' => 'laki-laki',
        ]);
    }

    /**
     * Indicate that the member is female.
     *
     * @return static
     */
    public function female(): static
    {
        return $this->state(fn (array $attributes) => [
            'jenis_kelamin' => 'perempuan',
        ]);
    }
}