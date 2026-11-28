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
  { no: 1,  src: "assets/galeri/nailart-1.jpg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 2,  src: "assets/galeri/press-on-1.jpg",    alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 3,  src: "assets/galeri/eyelash-1.jpg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 4,  src: "assets/galeri/nailart-2.jpg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 5,  src: "assets/galeri/press-on-2.jpg",    alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 6,  src: "assets/galeri/eyelash-2.jpg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 7,  src: "assets/galeri/nailart-3.jpg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 8,  src: "assets/galeri/press-on-3.jpg",    alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 9,  src: "assets/galeri/eyelash-3.jpeg",    alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 10, src: "assets/galeri/nailart-4.jpeg",    alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 11, src: "assets/galeri/press-on-4.jpg",    alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 12, src: "assets/galeri/eyelash-4.jpeg",    alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 13, src: "assets/galeri/nailart-5.jpeg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 14, src: "assets/galeri/press-on-5.jpeg",   alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 15, src: "assets/galeri/eyelash-5.jpeg",    alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 16, src: "assets/galeri/nailart-6.jpeg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 17, src: "assets/galeri/press-on-6.jpeg",   alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 18, src: "assets/galeri/eyelash-6.jpg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 19, src: "assets/galeri/nailart-7.jpeg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 20, src: "assets/galeri/press-on-7.jpeg",   alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 21, src: "assets/galeri/eyelash-7.jpeg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 22, src: "assets/galeri/nailart-8.jpeg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 23, src: "assets/galeri/press-on-8.jpeg",   alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 24, src: "assets/galeri/eyelash-8.jpeg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 25, src: "assets/galeri/nailart-9.jpeg",     alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 26, src: "assets/galeri/press-on-9.jpeg",   alt: "Press-on", rasio: "4/5", kategori: "presson" },
  { no: 27, src: "assets/galeri/eyelash-9.jpeg",     alt: "Eyelash",  rasio: "4/5", kategori: "lash"    },

  { no: 28, src: "assets/galeri/nailart-10.jpeg",    alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 29, src: "assets/galeri/press-on-10.jpeg",  alt: "Press-on", rasio: "4/5", kategori: "presson" },

  { no: 31, src: "assets/galeri/nailart-11.jpeg",    alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 32, src: "assets/galeri/press-on-11.jpeg",  alt: "Press-on", rasio: "4/5", kategori: "presson" },

  { no: 34, src: "assets/galeri/nailart-12.jpeg",    alt: "Nail art", rasio: "4/5", kategori: "nail"    },
  { no: 35, src: "assets/galeri/press-on-12.jpeg",  alt: "Press-on", rasio: "4/5", kategori: "presson" },
];