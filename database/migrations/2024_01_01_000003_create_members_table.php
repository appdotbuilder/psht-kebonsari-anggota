<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap')->comment('Full name of the member');
            $table->string('niw')->unique()->comment('Nomor Induk Warga (unique identifier)');
            $table->enum('jenis_kelamin', ['laki-laki', 'perempuan'])->comment('Gender');
            $table->string('tempat_lahir')->comment('Place of birth');
            $table->date('tanggal_lahir')->comment('Date of birth');
            $table->string('pendidikan_terakhir')->nullable()->comment('Last education');
            $table->string('pekerjaan')->nullable()->comment('Occupation');
            $table->text('alamat')->nullable()->comment('Address');
            $table->string('nomor_hp')->nullable()->comment('Phone number');
            $table->string('foto')->nullable()->comment('Photo path');
            $table->string('jabatan')->nullable()->comment('Position in organization');
            $table->year('tahun_pengesahan_tingkat_1')->nullable()->comment('Level 1 certification year');
            $table->year('tahun_pengesahan_tingkat_2')->nullable()->comment('Level 2 certification year');
            $table->string('rayon_sub_rayon')->nullable()->comment('Rayon/Sub Rayon');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('nama_lengkap');
            $table->index('niw');
            $table->index('jenis_kelamin');
            $table->index(['jenis_kelamin', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};