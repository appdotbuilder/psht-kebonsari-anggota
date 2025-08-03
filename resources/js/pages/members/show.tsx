import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

interface Member {
    id: number;
    nama_lengkap: string;
    niw: string;
    jenis_kelamin: 'laki-laki' | 'perempuan';
    tempat_lahir: string;
    tanggal_lahir: string;
    pendidikan_terakhir: string | null;
    pekerjaan: string | null;
    alamat: string | null;
    nomor_hp: string | null;
    foto: string | null;
    jabatan: string | null;
    tahun_pengesahan_tingkat_1: number | null;
    tahun_pengesahan_tingkat_2: number | null;
    rayon_sub_rayon: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    member: Member;
    [key: string]: unknown;
}

export default function MemberShow({ member }: Props) {
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
            title: member.nama_lengkap,
            href: `/members/${member.id}`,
        },
    ];

    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus anggota ${member.nama_lengkap}?`)) {
            router.delete(route('members.destroy', member.id));
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getBirthInfo = () => {
        return `${member.tempat_lahir}, ${formatDate(member.tanggal_lahir)}`;
    };

    const getAge = () => {
        const today = new Date();
        const birthDate = new Date(member.tanggal_lahir);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${member.nama_lengkap} - Detail Anggota`} />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            👤 Detail Anggota
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Informasi lengkap anggota PSHT Ranting Kebonsari
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={route('members.edit', member.id)}>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                ✏️ Edit
                            </Button>
                        </Link>
                        <Link href={route('members.index')}>
                            <Button variant="outline">
                                ← Kembali
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Photo and Basic Info */}
                    <div className="lg:col-span-1">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="p-6 text-center">
                                {member.foto ? (
                                    <img
                                        src={`/storage/${member.foto}`}
                                        alt={member.nama_lengkap}
                                        className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
                                    />
                                ) : (
                                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gray-100 text-6xl dark:bg-gray-700">
                                        {member.jenis_kelamin === 'laki-laki' ? '👨' : '👩'}
                                    </div>
                                )}
                                
                                <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                                    {member.nama_lengkap}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    NIW: {member.niw}
                                </p>
                                
                                <div className="mt-4">
                                    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
                                        member.jenis_kelamin === 'laki-laki'
                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                            : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
                                    }`}>
                                        {member.jenis_kelamin === 'laki-laki' ? '👨' : '👩'}
                                        {member.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                                    </span>
                                </div>

                                {member.jabatan && (
                                    <div className="mt-3">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                                            🏆 {member.jabatan}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="lg:col-span-2">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    📋 Informasi Detail
                                </h3>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Personal Information */}
                                    <div className="md:col-span-2">
                                        <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">👤 Data Pribadi</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Tempat, Tanggal Lahir</label>
                                                <p className="text-gray-900 dark:text-white">{getBirthInfo()} ({getAge()} tahun)</p>
                                            </div>
                                            {member.pendidikan_terakhir && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Pendidikan Terakhir</label>
                                                    <p className="text-gray-900 dark:text-white">{member.pendidikan_terakhir}</p>
                                                </div>
                                            )}
                                            {member.pekerjaan && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Pekerjaan</label>
                                                    <p className="text-gray-900 dark:text-white">{member.pekerjaan}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="md:col-span-2">
                                        <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">📞 Kontak</h4>
                                        <div className="space-y-3">
                                            {member.nomor_hp && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Nomor HP</label>
                                                    <p className="text-gray-900 dark:text-white">
                                                        <a href={`tel:${member.nomor_hp}`} className="hover:text-blue-600">
                                                            {member.nomor_hp}
                                                        </a>
                                                    </p>
                                                </div>
                                            )}
                                            {member.alamat && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Alamat</label>
                                                    <p className="text-gray-900 dark:text-white">{member.alamat}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Organization Information */}
                                    <div className="md:col-span-2">
                                        <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">🥋 Organisasi PSHT</h4>
                                        <div className="grid gap-3 md:grid-cols-2">
                                            {member.rayon_sub_rayon && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Rayon/Sub Rayon</label>
                                                    <p className="text-gray-900 dark:text-white">{member.rayon_sub_rayon}</p>
                                                </div>
                                            )}
                                            {member.tahun_pengesahan_tingkat_1 && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Pengesahan Tingkat I</label>
                                                    <p className="text-gray-900 dark:text-white">Tahun {member.tahun_pengesahan_tingkat_1}</p>
                                                </div>
                                            )}
                                            {member.tahun_pengesahan_tingkat_2 && (
                                                <div>
                                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Pengesahan Tingkat II</label>
                                                    <p className="text-gray-900 dark:text-white">Tahun {member.tahun_pengesahan_tingkat_2}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Registration Information */}
                                    <div className="md:col-span-2">
                                        <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">📅 Informasi Pendaftaran</h4>
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div>
                                                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Terdaftar Sejak</label>
                                                <p className="text-gray-900 dark:text-white">{formatDate(member.created_at)}</p>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Terakhir Diperbarui</label>
                                                <p className="text-gray-900 dark:text-white">{formatDate(member.updated_at)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-8 flex items-center gap-4">
                                    <Link href={route('members.edit', member.id)}>
                                        <Button className="bg-blue-600 hover:bg-blue-700">
                                            ✏️ Edit Data
                                        </Button>
                                    </Link>
                                    <Button 
                                        variant="destructive" 
                                        onClick={handleDelete}
                                        className="bg-red-600 hover:bg-red-700"
                                    >
                                        🗑️ Hapus Anggota
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}