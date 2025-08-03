import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Daftar Anggota',
        href: '/members',
    },
    {
        title: 'Tambah Anggota',
        href: '/members/create',
    },
];

export default function MemberCreate() {
    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: '',
        niw: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        pendidikan_terakhir: '',
        pekerjaan: '',
        alamat: '',
        nomor_hp: '',
        foto: null as File | null,
        jabatan: '',
        tahun_pengesahan_tingkat_1: '',
        tahun_pengesahan_tingkat_2: '',
        rayon_sub_rayon: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('members.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Anggota - PSHT Ranting Kebonsari" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            ➕ Tambah Anggota Baru
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Lengkapi form untuk menambahkan anggota PSHT Ranting Kebonsari
                        </p>
                    </div>
                    <Link href={route('members.index')}>
                        <Button variant="outline">
                            ← Kembali ke Daftar
                        </Button>
                    </Link>
                </div>

                {/* Form */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            📝 Data Anggota
                        </h2>
                    </div>
                    
                    <form onSubmit={submit} className="p-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Nama Lengkap */}
                            <div className="md:col-span-2">
                                <Label htmlFor="nama_lengkap">Nama Lengkap *</Label>
                                <Input
                                    id="nama_lengkap"
                                    type="text"
                                    value={data.nama_lengkap}
                                    onChange={(e) => setData('nama_lengkap', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Ahmad Sudrajat"
                                />
                                {errors.nama_lengkap && (
                                    <p className="mt-1 text-sm text-red-600">{errors.nama_lengkap}</p>
                                )}
                            </div>

                            {/* NIW */}
                            <div>
                                <Label htmlFor="niw">NIW (Nomor Induk Warga) *</Label>
                                <Input
                                    id="niw"
                                    type="text"
                                    value={data.niw}
                                    onChange={(e) => setData('niw', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: NIW12345"
                                />
                                {errors.niw && (
                                    <p className="mt-1 text-sm text-red-600">{errors.niw}</p>
                                )}
                            </div>

                            {/* Jenis Kelamin */}
                            <div>
                                <Label htmlFor="jenis_kelamin">Jenis Kelamin *</Label>
                                <Select value={data.jenis_kelamin} onValueChange={(value) => setData('jenis_kelamin', value)}>
                                    <SelectTrigger className="mt-1">
                                        <SelectValue placeholder="Pilih jenis kelamin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="laki-laki">👨 Laki-laki</SelectItem>
                                        <SelectItem value="perempuan">👩 Perempuan</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.jenis_kelamin && (
                                    <p className="mt-1 text-sm text-red-600">{errors.jenis_kelamin}</p>
                                )}
                            </div>

                            {/* Tempat Lahir */}
                            <div>
                                <Label htmlFor="tempat_lahir">Tempat Lahir *</Label>
                                <Input
                                    id="tempat_lahir"
                                    type="text"
                                    value={data.tempat_lahir}
                                    onChange={(e) => setData('tempat_lahir', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Malang"
                                />
                                {errors.tempat_lahir && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tempat_lahir}</p>
                                )}
                            </div>

                            {/* Tanggal Lahir */}
                            <div>
                                <Label htmlFor="tanggal_lahir">Tanggal Lahir *</Label>
                                <Input
                                    id="tanggal_lahir"
                                    type="date"
                                    value={data.tanggal_lahir}
                                    onChange={(e) => setData('tanggal_lahir', e.target.value)}
                                    className="mt-1"
                                />
                                {errors.tanggal_lahir && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tanggal_lahir}</p>
                                )}
                            </div>

                            {/* Pendidikan Terakhir */}
                            <div>
                                <Label htmlFor="pendidikan_terakhir">Pendidikan Terakhir</Label>
                                <Select value={data.pendidikan_terakhir} onValueChange={(value) => setData('pendidikan_terakhir', value)}>
                                    <SelectTrigger className="mt-1">
                                        <SelectValue placeholder="Pilih pendidikan terakhir" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="SD">SD</SelectItem>
                                        <SelectItem value="SMP">SMP</SelectItem>
                                        <SelectItem value="SMA">SMA</SelectItem>
                                        <SelectItem value="D3">D3</SelectItem>
                                        <SelectItem value="S1">S1</SelectItem>
                                        <SelectItem value="S2">S2</SelectItem>
                                        <SelectItem value="S3">S3</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.pendidikan_terakhir && (
                                    <p className="mt-1 text-sm text-red-600">{errors.pendidikan_terakhir}</p>
                                )}
                            </div>

                            {/* Pekerjaan */}
                            <div>
                                <Label htmlFor="pekerjaan">Pekerjaan</Label>
                                <Input
                                    id="pekerjaan"
                                    type="text"
                                    value={data.pekerjaan}
                                    onChange={(e) => setData('pekerjaan', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Guru, PNS, Wiraswasta"
                                />
                                {errors.pekerjaan && (
                                    <p className="mt-1 text-sm text-red-600">{errors.pekerjaan}</p>
                                )}
                            </div>

                            {/* Nomor HP */}
                            <div>
                                <Label htmlFor="nomor_hp">Nomor HP</Label>
                                <Input
                                    id="nomor_hp"
                                    type="text"
                                    value={data.nomor_hp}
                                    onChange={(e) => setData('nomor_hp', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: 081234567890"
                                />
                                {errors.nomor_hp && (
                                    <p className="mt-1 text-sm text-red-600">{errors.nomor_hp}</p>
                                )}
                            </div>

                            {/* Jabatan */}
                            <div>
                                <Label htmlFor="jabatan">Jabatan dalam Organisasi</Label>
                                <Input
                                    id="jabatan"
                                    type="text"
                                    value={data.jabatan}
                                    onChange={(e) => setData('jabatan', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Ketua Ranting, Sekretaris"
                                />
                                {errors.jabatan && (
                                    <p className="mt-1 text-sm text-red-600">{errors.jabatan}</p>
                                )}
                            </div>

                            {/* Tahun Pengesahan Tingkat 1 */}
                            <div>
                                <Label htmlFor="tahun_pengesahan_tingkat_1">Tahun Pengesahan Tingkat I</Label>
                                <Input
                                    id="tahun_pengesahan_tingkat_1"
                                    type="number"
                                    min="1980"
                                    max={new Date().getFullYear()}
                                    value={data.tahun_pengesahan_tingkat_1}
                                    onChange={(e) => setData('tahun_pengesahan_tingkat_1', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: 2020"
                                />
                                {errors.tahun_pengesahan_tingkat_1 && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tahun_pengesahan_tingkat_1}</p>
                                )}
                            </div>

                            {/* Tahun Pengesahan Tingkat 2 */}
                            <div>
                                <Label htmlFor="tahun_pengesahan_tingkat_2">Tahun Pengesahan Tingkat II</Label>
                                <Input
                                    id="tahun_pengesahan_tingkat_2"
                                    type="number"
                                    min="1980"
                                    max={new Date().getFullYear()}
                                    value={data.tahun_pengesahan_tingkat_2}
                                    onChange={(e) => setData('tahun_pengesahan_tingkat_2', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: 2023"
                                />
                                {errors.tahun_pengesahan_tingkat_2 && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tahun_pengesahan_tingkat_2}</p>
                                )}
                            </div>

                            {/* Rayon/Sub Rayon */}
                            <div>
                                <Label htmlFor="rayon_sub_rayon">Rayon/Sub Rayon</Label>
                                <Input
                                    id="rayon_sub_rayon"
                                    type="text"
                                    value={data.rayon_sub_rayon}
                                    onChange={(e) => setData('rayon_sub_rayon', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Rayon Kebonsari 1"
                                />
                                {errors.rayon_sub_rayon && (
                                    <p className="mt-1 text-sm text-red-600">{errors.rayon_sub_rayon}</p>
                                )}
                            </div>

                            {/* Alamat */}
                            <div className="md:col-span-2">
                                <Label htmlFor="alamat">Alamat</Label>
                                <Textarea
                                    id="alamat"
                                    value={data.alamat}
                                    onChange={(e) => setData('alamat', e.target.value)}
                                    className="mt-1"
                                    placeholder="Contoh: Jl. Raya Kebonsari No. 123, RT 02 RW 05, Kebonsari, Malang"
                                    rows={3}
                                />
                                {errors.alamat && (
                                    <p className="mt-1 text-sm text-red-600">{errors.alamat}</p>
                                )}
                            </div>

                            {/* Foto */}
                            <div className="md:col-span-2">
                                <Label htmlFor="foto">Foto Anggota</Label>
                                <Input
                                    id="foto"
                                    type="file"
                                    accept="image/jpeg,image/png,image/jpg"
                                    onChange={(e) => setData('foto', e.target.files?.[0] || null)}
                                    className="mt-1"
                                />
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Format: JPEG, PNG, JPG. Maksimal 2MB.
                                </p>
                                {errors.foto && (
                                    <p className="mt-1 text-sm text-red-600">{errors.foto}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex items-center gap-4">
                            <Button type="submit" disabled={processing} className="bg-red-600 hover:bg-red-700">
                                {processing ? '⏳ Menyimpan...' : '💾 Simpan Anggota'}
                            </Button>
                            <Link href={route('members.index')}>
                                <Button type="button" variant="outline">
                                    ❌ Batal
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}