import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Member {
    id: number;
    nama_lengkap: string;
    niw: string;
    jenis_kelamin: 'laki-laki' | 'perempuan';
    jabatan: string | null;
}

interface Stats {
    total: number;
    male: number;
    female: number;
}

interface Props {
    stats: Stats;
    members: Member[];
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ stats, members }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard - PSHT Ranting Kebonsari" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            🥋 Dashboard PSHT Ranting Kebonsari
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Sistem Pendataan Anggota Digital
                        </p>
                    </div>
                    <Link href={route('members.create')}>
                        <Button className="bg-red-600 hover:bg-red-700">
                            ➕ Tambah Anggota
                        </Button>
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl dark:bg-blue-900">
                                👥
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Anggota</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl dark:bg-green-900">
                                👨
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Anggota Laki-laki</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.male}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-2xl dark:bg-pink-900">
                                👩
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Anggota Perempuan</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.female}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members List */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            📋 Daftar Anggota Terbaru
                        </h2>
                        <Link href={route('members.index')}>
                            <Button variant="outline" size="sm">
                                Lihat Semua
                            </Button>
                        </Link>
                    </div>
                    
                    <div className="p-6">
                        {members.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="text-6xl mb-4">📝</div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                    Belum ada anggota terdaftar
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Mulai tambahkan data anggota PSHT Ranting Kebonsari
                                </p>
                                <Link href={route('members.create')}>
                                    <Button className="bg-red-600 hover:bg-red-700">
                                        ➕ Tambah Anggota Pertama
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Nama Lengkap
                                            </th>
                                            <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                NIW
                                            </th>
                                            <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Jenis Kelamin
                                            </th>
                                            <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Jabatan
                                            </th>
                                            <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {members.map((member) => (
                                            <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">
                                                    {member.nama_lengkap}
                                                </td>
                                                <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                                                    {member.niw}
                                                </td>
                                                <td className="py-3 text-sm">
                                                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                                                        member.jenis_kelamin === 'laki-laki'
                                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                                            : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
                                                    }`}>
                                                        {member.jenis_kelamin === 'laki-laki' ? '👨' : '👩'}
                                                        {member.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                                                    </span>
                                                </td>
                                                <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                                                    {member.jabatan || '-'}
                                                </td>
                                                <td className="py-3">
                                                    <Link href={route('members.show', member.id)}>
                                                        <Button variant="outline" size="sm">
                                                            👁️ Detail
                                                        </Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}