# Portofolio Profesional — Naufal Ilmi Bekti
> **Web Developer** — *"Building Modern Digital Experiences"*

Website portofolio personal yang modern, minimalis, elegan, responsif, dan siap dipublikasikan ke **GitHub Pages**. Dibangun menggunakan standar web murni (**HTML5 Semantik**, **CSS3 Modern**, dan **Vanilla JavaScript**) tanpa dependensi framework rumit, memastikan waktu muat super cepat dan performa maksimal.

---

## 📁 1. Struktur Folder & Fungsi Setiap Berkas

```text
portfolio-naufal/
├── index.html           # Struktur semantik halaman web utama
├── style.css            # Sistem desain, tipografi, palet warna, dan aturan responsif
├── script.js            # Interaktivitas navigasi, hamburger menu, animasi reveal, dan toast
├── README.md            # Dokumentasi lengkap panduan pengelolaan & deployment
└── assets/              # Berkas media, foto profil, dan dokumen
    ├── profile.jpg              # Foto profil utama (Naufal Ilmi Bekti)
    ├── project-kopi-senja.jpg   # Tangkapan layar proyek Kopi Senja
    ├── project-pesantren.jpg    # Tangkapan layar proyek Pesantren Modern Raudlatussalam
    ├── project-portfolio.jpg    # Tangkapan layar proyek Portofolio
    └── sertifikat.pdf           # Berkas Sertifikat resmi terverifikasi (PDF)
```

### Penjelasan Fungsi Berkas:
- **`index.html`**: Berisi seluruh elemen halaman yang terbagi dalam seksi-seksi terstruktur (Header/Navbar, Hero, About, Skills, Services, Portfolio, Journey/Milestone, Collaboration, Contact, Footer).
- **`style.css`**: Menggunakan CSS Variables untuk memudahkan penyesuaian tema warna (Teal `#0d9488`, Charcoal `#18181b`, Soft Orange `#ea580c`), tata letak Flexbox dan CSS Grid, efek bayangan lembut, serta media queries untuk kompatibilitas tampilan smartphone hingga desktop.
- **`script.js`**: Menangani fungsi interaktif: buka-tutup menu mobile (hamburger), perpindahan status navigasi aktif saat pengguna menggulir halaman, animasi kemunculan elemen (*reveal animation*), tombol salin email dengan notifikasi pop-up (*toast*), tombol kembali ke atas (*back to top*), dan tahun hak cipta otomatis.
- **`assets/`**: Menyimpan semua aset statis lokal. Path relatif `./assets/...` digunakan agar tautan gambar dan PDF langsung berfungsi saat diunggah ke GitHub Pages maupun saat berkas dibuka langsung secara lokal di komputer.

---

## 🖼️ 2. Cara Mengganti Foto Profil
1. Siapkan foto profil Anda dalam format `.jpg` atau `.png`.
2. Ubah nama berkas foto Anda menjadi `profile.jpg`.
3. Ganti berkas di dalam folder `assets/profile.jpg`.
4. Jika ingin mengatur posisi fokus wajah agar tetap proporsional tanpa terdistorsi atau terpotong tidak wajar, buka berkas `style.css` lalu sesuaikan baris:
   ```css
   .profile-img {
     object-fit: cover;
     object-position: 50% 18%; /* Sesuaikan persentase vertikal sesuai fokus foto */
   }
   ```

---

## ✍️ 3. Cara Mengedit Nama dan Deskripsi
Buka berkas `index.html`:
1. **Nama & Brand Wordmark:**
   Cari teks `Naufal Ilmi Bekti` pada tag `<a href="#home" class="logo-wordmark">` dan `<footer>`.
   *(Sesuai panduan identitas: selalu gunakan tulisan nama lengkap tanpa singkatan inisial).*
2. **Sapaan & Headline Hero:**
   Cari `<p class="hero-greeting">Halo, Saya</p>` dan tag `<h1 class="hero-title">`.
3. **Deskripsi Singkat:**
   Ubah isi paragraf `<p class="hero-description">` sesuai ringkasan profil yang ingin Anda tampilkan.

---

## 🛠️ 4. Cara Memperbarui Skill (Keahlian Teknis)
Pada bagian `<section id="skills">` di `index.html`:
Setiap keahlian dibungkus dalam elemen kartu `<div class="skill-card">`:
```html
<div class="skill-card fade-up">
  <div class="skill-icon-wrap">
    <!-- Masukkan ikon SVG yang relevan di sini -->
  </div>
  <h3 class="skill-name">Nama Skill</h3>
  <p class="skill-tag">Keterangan Singkat</p>
</div>
```
Tambahkan atau hapus kartu sesuai perkembangan keahlian Anda tanpa perlu khawatir merusak tata letak, karena CSS Grid akan otomatis menyesuaikan jumlah kolom.

---

## 🚀 5. Cara Menambah Proyek Baru
Pada bagian `<section id="portfolio">` di `index.html`:
Salin satu blok `<article class="project-card">` dan sesuaikan isinya:
1. Masukkan gambar cuplikan proyek ke folder `assets/nama-proyek.jpg`.
2. Ubah atribut `src="./assets/nama-proyek.jpg"` dan `alt="..."`.
3. Perbarui Judul Proyek, Kategori, Deskripsi, dan tumpukan teknologi (*tech stack*).
4. Atur tautan tombol:
   - **Live Demo**: Masukkan URL demo website yang aktif (misal `https://username.github.io/proyek-anda`).
   - **Source Code**: Masukkan URL repositori GitHub.

---

## 📬 6. Cara Mengatur Kontak
Pada bagian `<section class="contact-section" id="contact">` di `index.html`:
1. **Email:**
   Ganti nilai `href="mailto:email-anda@gmail.com"` dan ubah juga teks email yang tertera.
   Perbarui juga variabel email di dalam fungsi `initCopyEmail()` di berkas `script.js`.
2. **WhatsApp:**
   Tautan WhatsApp telah dikonfigurasi dengan nomor resmi Anda:
   `https://wa.me/6283119395328?text=Halo%20Naufal...`
   *(Format internasional: `+62 831-1939-5328`)*.
3. **GitHub:**
   Tautan GitHub terhubung ke profil: `https://github.com/naufalilmi12`.

---

## 📄 7. Cara Menambahkan / Memperbarui Berkas Sertifikat (PDF)
1. Simpan dokumen sertifikat atau piagam keahlian Anda dalam format PDF dengan nama `sertifikat.pdf`.
2. Letakkan di dalam folder `assets/sertifikat.pdf`.
3. Tautan pada tombol **Lihat Sertifikat** di navbar, seksi milestone, dan seksi kontak secara otomatis akan membuka dokumen ini langsung di tab baru browser.

---

## 🌐 8. Cara Mengunggah Berkas ke Repositori GitHub
Jika Anda belum memiliki repositori:
1. Buka [GitHub](https://github.com) dan buat repositori baru bernama `portfolio-naufal` (atau `<username>.github.io`).
2. Di komputer lokal Anda, buka terminal di dalam folder proyek ini lalu jalankan:
   ```bash
   git init
   git add .
   git commit -m "Initial release: Portofolio Profesional Naufal Ilmi Bekti"
   git branch -M main
   git remote add origin https://github.com/naufalilmi12/portfolio-naufal.git
   git push -u origin main
   ```

---

## ⚙️ 9. Cara Mengaktifkan GitHub Pages
1. Buka halaman repositori Anda di GitHub.
2. Klik tab **Settings** (ikon roda gigi di bagian atas).
3. Pada bilah menu sebelah kiri, pilih menu **Pages**.
4. Di bagian **Build and deployment**:
   - Sumber (*Source*): pilih **Deploy from a branch**.
   - Branch: pilih **`main`** dan folder **`/ (root)`**.
5. Klik tombol **Save**.
6. Tunggu proses deployment selama 1–2 menit hingga muncul tautan hijau bertuliskan:
   `Your site is live at https://<username>.github.io/<nama-repo>/`

---

## 🔍 10. Memeriksa Deployment & Memperbaiki Error 404
Jika setelah dipublikasikan muncul tampilan 404 atau gambar tidak muncul:
1. **Periksa Nama Berkas Index:** Pastikan berkas utama bernama persis `index.html` (seluruhnya huruf kecil).
2. **Cek Pengaturan Repository:** Pastikan repositori berstatus **Public** (repositori privat memerlukan GitHub Pro untuk Pages).
3. **Periksa Tab Actions:** Klik menu **Actions** di repositori Anda untuk melihat log apakah proses *pages-build-deployment* sukses atau ada kendala.
4. **Hard Refresh Browser:** Tekan tombol `Ctrl + Shift + R` (Windows) atau `Cmd + Shift + R` (Mac) untuk membersihkan *cache* browser lama.

---

## 🔤 11. Memastikan Nama Berkas & Path Aset Sesuai Huruf Besar/Kecil
Sistem server GitHub Pages berjalan di lingkungan Linux yang bersifat **Case-Sensitive** (sensitif terhadap huruf besar/kecil):
- Pastikan semua nama folder dan berkas menggunakan huruf kecil: `assets/`, `profile.jpg`, `style.css`, `script.js`.
- Jangan menuliskan `Assets/Profile.JPG` jika nama berkas aslinya adalah `assets/profile.jpg`.
- Selalu gunakan format path relatif `./assets/...` agar website dapat dibuka di root domain maupun subfolder GitHub Pages.

---

## 📱 Panduan Pengujian Melalui Browser Smartphone (Android)
Untuk memastikan tampilan sempurna di layar ponsel (lebar 320px–430px):
1. **Google Chrome DevTools (Mode Mobile):**
   - Tekan tombol `F12` atau klik kanan lalu pilih **Inspect**.
   - Klik ikon perangkat ponsel di pojok kiri atas (*Toggle Device Toolbar* atau `Ctrl+Shift+M`).
   - Pilih preset perangkat seperti **Samsung Galaxy S20 Ultra**, **Pixel 7**, atau atur lebar ke `360px` dan `390px`.
2. **Pengujian Langsung di Ponsel Android:**
   - Setelah website aktif di GitHub Pages, buka tautan tersebut menggunakan Chrome di smartphone Anda.
   - Uji coba menekan tombol **Hamburger Menu**, periksa apakah menu terbuka halus dan tertutup otomatis saat link ditekan.
   - Geser ke atas dan bawah untuk memastikan tidak ada pergeseran layar mendatar (*horizontal scrolling overflow*).
   - Pastikan teks headline terbaca jelas dan foto profil tampil proporsional di bawah teks perkenalan.

---

© 2026 **Naufal Ilmi Bekti**. All rights reserved.
