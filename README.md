dokumentasi singkat cara menjalankan proyek di file README.md.

1. Membuat Folder Project

Langkah pertama adalah membuat project React menggunakan Vite melalui terminal dengan perintah berikut:

npm create vite@latest responsi_1 -- --template react

Perintah tersebut digunakan untuk membuat folder project baru dengan nama responsi_1 menggunakan template React.

2. Masuk ke Folder Project dan Instalasi Dependencies

Setelah project berhasil dibuat, masuk ke folder project menggunakan perintah:

cd responsi_1

Selanjutnya, lakukan instalasi dependencies yang diperlukan:

npm install
npm install bootstrap react-bootstrap
npm install jquery

Instalasi ini dilakukan agar Bootstrap, React Bootstrap, dan jQuery dapat digunakan dalam project.

3. Membuat Folder Components

Selanjutnya, buka project melalui Visual Studio Code. Di dalam folder src, buat folder baru dengan nama components.

Kemudian, buat empat file di dalam folder tersebut, yaitu:

Sidebar.jsx

Navbar.jsx

ProductTable.jsx

ProductModel.jsx

Setiap file digunakan untuk membuat bagian-bagian tampilan dashboard, seperti menu samping, navbar, tabel produk, dan modal produk.

4. Melengkapi Kode Program dan Menjalankan Project

Setelah semua file berhasil dibuat, masukkan kode program pada setiap komponen sesuai dengan fungsinya. Kemudian, hubungkan seluruh komponen melalui file utama aplikasi.

Jika semua kode sudah selesai, jalankan project melalui terminal VS Code menggunakan perintah:

npm run dev

Setelah berhasil dijalankan, buka alamat yang muncul pada terminal, yaitu:

http://localhost:5173/

5. Hasil Akhir Dashboard E-Commerce

Berikut merupakan tampilan hasil akhir project Dashboard E-Commerce yang berhasil dibuat dan dijalankan melalui browser.
![alt text](<Screenshot 2026-11-09 201912.png>)


Penjelasan Hasil Akhir

Berdasarkan hasil implementasi, aplikasi Dashboard E-Commerce berhasil menampilkan halaman utama dengan tema warna pink dan putih. Pada bagian kiri terdapat sidebar yang berisi menu Dashboard, Data Produk, dan Ringkasan. Bagian atas menampilkan judul Dashboard dan informasi admin.

Pada halaman utama terdapat empat kartu informasi, yaitu Total Produk, Total Stok, Stok Menipis, dan Nilai Persediaan. Selain itu, terdapat tabel daftar produk yang menampilkan nama produk, kategori, harga, stok, diskon, status, serta tombol Edit dan Hapus.

Dengan demikian, project Dashboard E-Commerce berhasil dibuat dan dijalankan sesuai dengan hasil tampilan yang diharapkan.
