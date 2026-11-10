RESPONS I 1 – DASHBOARD REKAM MEDIS PASIEN

Dokumentasi Cara Menjalankan Project

1. Membuat Folder Project

Langkah pertama adalah membuat project React menggunakan Vite melalui terminal dengan perintah berikut:

```bash
npm create vite@latest responsi_1 -- --template react
```

Perintah tersebut digunakan untuk membuat folder project baru dengan nama `responsi_1` menggunakan template React.

2. Masuk ke Folder Project dan Instalasi Dependencies

Setelah project berhasil dibuat, masuk ke folder project menggunakan perintah:

```bash
cd responsi_1
```

Selanjutnya, lakukan instalasi dependencies yang diperlukan:

```bash
npm install
npm install bootstrap react-bootstrap
npm install jquery
```

Instalasi ini dilakukan agar Bootstrap, React Bootstrap, dan jQuery dapat digunakan dalam project.

3. Membuat Folder Components

Selanjutnya, buka project melalui Visual Studio Code. Di dalam folder `src`, buat folder baru dengan nama `components`.

Kemudian, buat empat file di dalam folder tersebut, yaitu:

- Sidebar.jsx
- Navbar.jsx
- PatientTable.jsx
- PatientForm.jsx

Setiap file digunakan untuk membangun bagian-bagian tampilan dashboard, seperti menu samping, navbar, tabel data pasien, dan form untuk menambah maupun mengedit data pasien.

4. Melengkapi Kode Program dan Menjalankan Project

Setelah semua file berhasil dibuat, masukkan kode program pada setiap komponen sesuai dengan fungsinya. Kemudian, hubungkan seluruh komponen melalui file utama aplikasi, yaitu `App.jsx`.

Untuk mengatur tampilan dashboard, gunakan file `index.css`.

Jika semua kode sudah selesai, jalankan project melalui terminal VS Code menggunakan perintah:

```bash
npm run dev
```

Setelah berhasil dijalankan, buka alamat yang muncul pada terminal, yaitu:



5. Hasil Akhir Dashboard Rekam Medis Pasien

Berikut merupakan tampilan hasil akhir project Dashboard Rekam Medis Pasien yang berhasil saya buat dan jalankan melalui browser.

![alt text](<Screenshot 2026-11-10 064258.png>)

Penjelasan Hasil Akhir

Berdasarkan hasil implementasi, aplikasi Dashboard Rekam Medis Pasien berhasil menampilkan halaman utama dengan kombinasi warna hijau toska dan putih. Pada bagian kiri terdapat sidebar yang berisi menu Dasbor, Data Pasien, dan Ringkasan. Bagian atas menampilkan judul halaman serta informasi admin.

Pada halaman utama terdapat empat kartu informasi, yaitu Jumlah Pasien, Kunjungan Hari Ini, Sedang Ditangani, dan Penanganan Selesai. Selain itu, terdapat tabel daftar pasien yang menampilkan nomor rekam medis, nama pasien, jenis kelamin, poliklinik, dokter, tanggal kunjungan, dan status penanganan.

Aplikasi ini juga dilengkapi dengan fitur pencarian data pasien serta tombol Tambah Pasien, Edit, dan Hapus untuk mengelola data pasien.

Dengan demikian, project Dashboard Rekam Medis Pasien berhasil dibuat dan dijalankan sesuai dengan kebutuhan kasus yang diberikan.
