import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

interface Member {
    id: number;
    nama_lengkap: string;
    niw: string;
    jenis_kelamin: 'laki-laki' | 'perempuan';
    jabatan: string | null;
    created_at: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface MembersPagination {
    data: Member[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: PaginationLink[];
}

interface Props {
    members: MembersPagination;
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Daftar Anggota',
        href: '/members',
    },
];

export default function MembersIndex({ members }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Daftar Anggota - PSHT Ranting Kebonsari" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6 overflow-x-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            👥 Daftar Anggota
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Kelola data anggota PSHT Ranting Kebonsari
                        </p>
                    </div>
                    <Link href={route('members.create')}>
                        <Button className="bg-red-600 hover:bg-red-700">
                            ➕ Tambah Anggota
                        </Button>
                    </Link>
                </div>

                {/* Members List */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                📋 Total: {members.total} Anggota
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Halaman {members.current_page} dari {members.last_page}
                            </p>
                        </div>
                    </div>
                    
                    <div className="p-6">
                        {members.data.length === 0 ? (
                            <div className="text-center py-12">
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
                            <>
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
                                                    Terdaftar
                                                </th>
                                                <th className="pb-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {members.data.map((member) => (
                                                <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                                    <td className="py-4 text-sm font-medium text-gray-900 dark:text-white">
                                                        {member.nama_lengkap}
                                                    </td>
                                                    <td className="py-4 text-sm text-gray-600 dark:text-gray-400">
                                                        {member.niw}
                                                    </td>
                                                    <td className="py-4 text-sm">
                                                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                                                            member.jenis_kelamin === 'laki-laki'
                                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                                                : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
                                                        }`}>
                                                            {member.jenis_kelamin === 'laki-laki' ? '👨' : '👩'}
                                                            {member.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 text-sm text-gray-600 dark:text-gray-400">
                                                        {member.jabatan || '-'}
                                                    </td>
                                                    <td className="py-4 text-sm text-gray-600 dark:text-gray-400">
                                                        {new Date(member.created_at).toLocaleDateString('id-ID')}
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-2">
                                                            <Link href={route('members.show', member.id)}>
                                                                <Button variant="outline" size="sm">
                                                                    👁️ Detail
                                                                </Button>
                                                            </Link>
                                                            <Link href={route('members.edit', member.id)}>
                                                                <Button variant="outline" size="sm">
                                                                    ✏️ Edit
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                {members.last_page > 1 && (
                                    <div className="mt-6 flex items-center justify-between">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Menampilkan {((members.current_page - 1) * members.per_page) + 1} - {Math.min(members.current_page * members.per_page, members.total)} dari {members.total} anggota
                                        </p>
                                        <div className="flex items-center gap-2">
                                            {members.links.map((link, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => link.url && router.get(link.url)}
                                                    disabled={!link.url}
                                                    className={`px-3 py-1 text-sm rounded ${
                                                        link.active
                                                            ? 'bg-red-600 text-white'
                                                            : link.url
                                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}