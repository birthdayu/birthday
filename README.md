# 🎂 Birthday Surprise Website — Panduan Setup

Website surprise ulang tahun LDR yang interaktif dan penuh cinta 💕

---

## 📁 Struktur Folder

```
birthday-surprise/
│
├── index.html        ← 🎁 Gift Box + Countdown + Foto strip
├── quiz.html         ← 🧠 Quiz seberapa kenal
├── choice.html       ← 😌 Pilihan lucu
├── prank.html        ← 😏 Tombol jangan diklik
├── letter.html       ← 💌 Surat cinta (typewriter effect)
├── ending.html       ← 💕 Halaman akhir + stats
├── video.html        ← 🎬 Halaman video
│
├── css/
│   ├── style.css         ← Styling utama
│   └── slideshow.css     ← Styling slideshow + musik btn
│
├── js/
│   ├── main.js           ← Animasi hati & foto terbang + confetti
│   ├── slideshow.js      ← Slideshow background semua halaman
│   └── music.js          ← Musik lanjut antar halaman
│
├── images/
│   ├── photo1.jpg    ← Ganti dengan foto kalian!
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   └── photo5.jpg
│
├── music/
│   └── romantic.mp3  ← Taruh file musik di sini!
│
└── video/
    └── surprise.mp4  ← Taruh video di sini!
```

---

## 🖼️ Cara Tambah Foto

1. Siapkan foto kalian (jpg/png)
2. Rename jadi `photo1.jpg`, `photo2.jpg`, dst
3. Taruh di folder `images/`
4. Selesai! Foto akan otomatis muncul di:
   - Background slideshow (semua halaman)
   - Strip foto kecil di halaman pembuka
   - Polaroid di halaman surat
   - Animasi foto terbang (acak)

Mau lebih dari 5 foto? Edit baris `slideshowPhotos` di `index.html` dan array `photos` di `js/main.js` & `js/slideshow.js`.

---

## 🎵 Cara Tambah Musik

1. Siapkan file musik format MP3 (atau OGG)
2. Rename jadi `romantic.mp3`
3. Taruh di folder `music/`
4. Musik akan muncul sebagai tombol 🎵 setelah gift box dibuka

Rekomendasi lagu:
- Perfect - Ed Sheeran
- A Thousand Years - Christina Perri
- Can't Help Falling in Love - Elvis / covers
- Die With a Smile - Bruno Mars & Lady Gaga

---

## 🎬 Cara Tambah Video

1. Taruh file video di `video/surprise.mp4`
2. Buka `video.html`, cari bagian komentar, uncomment tag `<video>`
3. Hapus `<div class="video-placeholder">`

---

## ✏️ Yang Perlu Diedit

| Yang mau diubah | File | Yang dicari |
|---|---|---|
| Jawaban quiz | `quiz.html` | `correct: 1` (index mulai 0) |
| Isi surat | `letter.html` | Array `lines` di bagian script |
| Tanggal ulang tahun/kenal/pacaran | `index.html` & `ending.html` | `BDAY`, `DATE_KENAL`, `DATE_PACAR` |
| Daftar foto | `js/main.js`, `js/slideshow.js` | Array `photos` / `slideshowPhotos` |

---

## 🚀 Cara Buka / Host

**Offline:** Double-click `index.html`

**Online (biar bisa kirim link):**
- [Netlify Drop](https://app.netlify.com/drop) — drag & drop folder, langsung dapat link
- [Tiiny.host](https://tiiny.host/) — upload ZIP, dapat link dalam 1 menit

---

## 💕 Urutan Halaman

```
index.html → quiz.html → choice.html → prank.html → letter.html → ending.html → video.html
```

Dibuat dengan ❤️ — semoga dia suka!
