import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="PSHT Ranting Kebonsari - Sistem Pendataan Anggota">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-red-50 to-yellow-50 p-6 text-gray-900 lg:justify-center lg:p-8 dark:from-gray-900 dark:to-gray-800 dark:text-white">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-red-700 transition-colors"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-red-700 transition-colors"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col lg:max-w-6xl lg:flex-row lg:gap-12">
                        <div className="flex-1 rounded-2xl bg-white p-8 shadow-2xl lg:p-12 dark:bg-gray-800">
                            <div className="text-center lg:text-left">
                                <div className="mb-6 flex justify-center lg:justify-start">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl dark:bg-red-900">
                                            🥋
                                        </div>
                                        <div>
                                            <h1 className="text-3xl font-bold text-red-600 lg:text-4xl">PSHT</h1>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Ranting Kebonsari</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                                    📊 Sistem Pendataan Anggota
                                </h2>
                                <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                    Platform digital untuk mengelola data anggota PSHT Ranting Kebonsari dengan mudah dan efisien.
                                </p>

                                <div className="mb-8 grid gap-6 md:grid-cols-2">
                                    <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                                        <div className="mb-3 text-3xl">📈</div>
                                        <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-300">Dashboard Statistik</h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-400">
                                            Pantau total anggota, distribusi gender, dan data lengkap dalam satu tampilan
                                        </p>
                                    </div>
                                    
                                    <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                                        <div className="mb-3 text-3xl">👥</div>
                                        <h3 className="mb-2 font-semibold text-green-900 dark:text-green-300">Manajemen Anggota</h3>
                                        <p className="text-sm text-green-700 dark:text-green-400">
                                            Tambah, edit, dan kelola data lengkap anggota termasuk foto dan jabatan
                                        </p>
                                    </div>
                                    
                                    <div className="rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
                                        <div className="mb-3 text-3xl">🏆</div>
                                        <h3 className="mb-2 font-semibold text-purple-900 dark:text-purple-300">Tingkat Pengesahan</h3>
                                        <p className="text-sm text-purple-700 dark:text-purple-400">
                                            Catat tahun pengesahan tingkat I dan II setiap anggota
                                        </p>
                                    </div>
                                    
                                    <div className="rounded-lg bg-orange-50 p-6 dark:bg-orange-900/20">
                                        <div className="mb-3 text-3xl">📋</div>
                                        <h3 className="mb-2 font-semibold text-orange-900 dark:text-orange-300">Data Lengkap</h3>
                                        <p className="text-sm text-orange-700 dark:text-orange-400">
                                            NIW, biodata, pendidikan, pekerjaan, alamat, dan rayon/sub rayon
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-colors"
                                        >
                                            🚀 Buka Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-red-700 transition-colors"
                                            >
                                                🔑 Masuk ke Sistem
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="inline-flex items-center justify-center rounded-lg border-2 border-red-600 px-8 py-3 text-lg font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                                            >
                                                ✍️ Daftar Sekarang
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <footer className="mt-12 border-t pt-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                                <p>🥋 <strong>PSHT Ranting Kebonsari</strong> - Sistem Pendataan Anggota Digital</p>
                                <p className="mt-1">Melestarikan tradisi dengan teknologi modern</p>
                            </footer>
                        </div>
                        
                        <div className="mt-8 flex-1 lg:mt-0">
                            <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-8 text-white shadow-2xl">
                                <h3 className="mb-6 text-2xl font-bold">📊 Fitur Utama</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-yellow-300">✅</div>
                                        <div>
                                            <h4 className="font-semibold">Dashboard Statistik Real-time</h4>
                                            <p className="text-red-100">Lihat total anggota dan distribusi gender secara langsung</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-yellow-300">✅</div>
                                        <div>
                                            <h4 className="font-semibold">Manajemen Data Lengkap</h4>
                                            <p className="text-red-100">Form lengkap dengan 13+ field data anggota</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-yellow-300">✅</div>
                                        <div>
                                            <h4 className="font-semibold">Upload Foto Anggota</h4>
                                            <p className="text-red-100">Simpan foto profil setiap anggota di server lokal</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-yellow-300">✅</div>
                                        <div>
                                            <h4 className="font-semibold">Database PostgreSQL</h4>
                                            <p className="text-red-100">Penyimpanan data yang aman dan reliable</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 rounded-lg bg-white/10 p-4">
                                    <h4 className="mb-2 font-semibold">📝 Data yang Dikelola:</h4>
                                    <div className="grid grid-cols-2 gap-2 text-sm text-red-100">
                                        <div>• Nama Lengkap</div>
                                        <div>• NIW</div>
                                        <div>• Jenis Kelamin</div>
                                        <div>• Tempat & Tanggal Lahir</div>
                                        <div>• Pendidikan</div>
                                        <div>• Pekerjaan</div>
                                        <div>• Alamat</div>
                                        <div>• No. HP</div>
                                        <div>• Foto</div>
                                        <div>• Jabatan</div>
                                        <div>• Tingkat I & II</div>
                                        <div>• Rayon/Sub Rayon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}