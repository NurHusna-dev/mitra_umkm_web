// ============================================================
// DAFTAR FOTO GALERI  (satu baris = satu foto)
//
// CARA MEMASANG FOTO:
//   1. Simpan foto di folder  assets/galeri/   (kompres dulu, target < 200 KB)
//   2. Pada baris dengan nomor FOTO yang sesuai, isi:
//        src      : jalur foto, contoh "assets/galeri/nail-01.jpg"
//        alt      : deskripsi singkat isi foto (untuk aksesibilitas)
//        rasio    : bentuk kotak: "1/1" (kotak), "4/5" (tegak), "3/4" (lebih tegak), "4/3" (lebar)
//        kategori : harus salah satu dari: "nail", "presson", "lash"
//                   (menentukan foto muncul di tombol filter yang mana)
//   3. Simpan. Tidak perlu menyentuh HTML.
//
// Selama src dikosongkan (""), tampil kotak warna berlabel "FOTO 8", "FOTO 9", dst.
// supaya jelas foto mana yang harus dimasukkan ke posisi mana.
// Tambah foto = salin satu baris (nomor `no` boleh dihapus untuk baris tambahan).
// Urutan baris = urutan tampil. Hapus baris untuk membuang foto.
// ============================================================

// Tombol filter di atas galeri. Ubah label bila perlu; id jangan diubah.
const GALERI_KATEGORI = [
  { id: "nail",    label: "Nail Art" },
  { id: "presson", label: "Press-On" },
  { id: "lash",    label: "Eyelash" }
];

const GALERI = [
  { no: 8,  src: "assets/galeri/foto-8.jpg",   alt: "Nail art",   rasio: "4/5", kategori: "nail" },
  { no: 9,  src: "assets/galeri/press-on-1.jpg", alt: "Press-on",   rasio: "4/5", kategori: "presson" },
  { no: 10, src: "assets/galeri/foto-10.jpg", alt: "Eyelash",    rasio: "4/5", kategori: "lash" },
  { no: 11, src: "assets/galeri/foto-11.jpg", alt: "Nail art",   rasio: "4/5", kategori: "nail" },
  { no: 12, src: "assets/galeri/press-on-2.jpg", alt: "Press-on",   rasio: "4/5", kategori: "presson" },
  { no: 13, src: "assets/galeri/foto-13.jpg", alt: "Eyelash",    rasio: "4/5", kategori: "lash" },
  { no: 14, src: "assets/galeri/foto-14.jpg", alt: "Nail art",   rasio: "4/5", kategori: "nail" },
  { no: 15, src: "assets/galeri/press-on-3.jpg", alt: "Press-on",   rasio: "4/5", kategori: "presson" }
];