<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Member
 *
 * @property int $id
 * @property string $nama_lengkap
 * @property string $niw
 * @property string $jenis_kelamin
 * @property string $tempat_lahir
 * @property \Illuminate\Support\Carbon $tanggal_lahir
 * @property string|null $pendidikan_terakhir
 * @property string|null $pekerjaan
 * @property string|null $alamat
 * @property string|null $nomor_hp
 * @property string|null $foto
 * @property string|null $jabatan
 * @property int|null $tahun_pengesahan_tingkat_1
 * @property int|null $tahun_pengesahan_tingkat_2
 * @property string|null $rayon_sub_rayon
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Member newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Member newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Member query()
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereAlamat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereFoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereJabatan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereJenisKelamin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereNamaLengkap($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereNiw($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereNomorHp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member wherePekerjaan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member wherePendidikanTerakhir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereRayonSubRayon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereTahunPengesahanTingkat1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereTahunPengesahanTingkat2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereTanggalLahir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereTempatLahir($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Member whereUpdatedAt($value)
 * @method static \Database\Factories\MemberFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Member extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nama_lengkap',
        'niw',
        'jenis_kelamin',
        'tempat_lahir',
        'tanggal_lahir',
        'pendidikan_terakhir',
        'pekerjaan',
        'alamat',
        'nomor_hp',
        'foto',
        'jabatan',
        'tahun_pengesahan_tingkat_1',
        'tahun_pengesahan_tingkat_2',
        'rayon_sub_rayon',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'tanggal_lahir' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'members';

    /**
     * Get the member's age.
     *
     * @return int
     */
    public function getAgeAttribute(): int
    {
        return $this->tanggal_lahir->age ?? 0;
    }

    /**
     * Get the full birth place and date.
     *
     * @return string
     */
    public function getFullBirthInfoAttribute(): string
    {
        $dateFormatted = $this->tanggal_lahir->format('d F Y');
        return $this->tempat_lahir . ', ' . $dateFormatted;
    }
}