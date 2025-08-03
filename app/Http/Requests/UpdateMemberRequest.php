<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_lengkap' => 'required|string|max:255',
            'niw' => 'required|string|unique:members,niw,' . $this->route('member')->id . '|max:255',
            'jenis_kelamin' => 'required|in:laki-laki,perempuan',
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date|before:today',
            'pendidikan_terakhir' => 'nullable|string|max:255',
            'pekerjaan' => 'nullable|string|max:255',
            'alamat' => 'nullable|string',
            'nomor_hp' => 'nullable|string|max:20',
            'foto' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'jabatan' => 'nullable|string|max:255',
            'tahun_pengesahan_tingkat_1' => 'nullable|integer|min:1980|max:' . date('Y'),
            'tahun_pengesahan_tingkat_2' => 'nullable|integer|min:1980|max:' . date('Y'),
            'rayon_sub_rayon' => 'nullable|string|max:255',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nama_lengkap.required' => 'Nama lengkap wajib diisi.',
            'niw.required' => 'NIW (Nomor Induk Warga) wajib diisi.',
            'niw.unique' => 'NIW sudah terdaftar untuk anggota lain.',
            'jenis_kelamin.required' => 'Jenis kelamin wajib dipilih.',
            'jenis_kelamin.in' => 'Jenis kelamin harus laki-laki atau perempuan.',
            'tempat_lahir.required' => 'Tempat lahir wajib diisi.',
            'tanggal_lahir.required' => 'Tanggal lahir wajib diisi.',
            'tanggal_lahir.date' => 'Format tanggal lahir tidak valid.',
            'tanggal_lahir.before' => 'Tanggal lahir harus sebelum hari ini.',
            'foto.image' => 'File harus berupa gambar.',
            'foto.mimes' => 'Format foto harus JPEG, PNG, atau JPG.',
            'foto.max' => 'Ukuran foto maksimal 2MB.',
            'tahun_pengesahan_tingkat_1.integer' => 'Tahun pengesahan tingkat I harus berupa angka.',
            'tahun_pengesahan_tingkat_1.min' => 'Tahun pengesahan tingkat I minimal 1980.',
            'tahun_pengesahan_tingkat_1.max' => 'Tahun pengesahan tingkat I maksimal tahun ini.',
            'tahun_pengesahan_tingkat_2.integer' => 'Tahun pengesahan tingkat II harus berupa angka.',
            'tahun_pengesahan_tingkat_2.min' => 'Tahun pengesahan tingkat II minimal 1980.',
            'tahun_pengesahan_tingkat_2.max' => 'Tahun pengesahan tingkat II maksimal tahun ini.',
        ];
    }
}