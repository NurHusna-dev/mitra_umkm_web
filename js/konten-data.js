// ============================================================
// ISI TEKS: DAFTAR HARGA dan "KENAPA RONA"
// Dikosongkan ([]) = bagian terkait otomatis hilang dari halaman.
// Aturan penulisan: setiap baris dipisah koma, teks di dalam tanda kutip "...".
// ============================================================


// ------------------------------------------------------------
// ⑩ DAFTAR HARGA  (bagian "Daftar harga", di bawah layanan)
// Satu kelompok = satu kartu. Isi kelompok & item sesuai pricelist asli.
// harga ditulis sebagai teks bebas, contoh: "Rp 150.000" atau "mulai Rp 150.000".
// catatan (opsional): keterangan kecil di bawah item, boleh dikosongkan "".
//
// Contoh bentuk (hapus tanda // di depan untuk memakai, lalu ganti isinya):
//
// const HARGA = [
//   { layanan: "Custom Nail Art", item: [
//       { nama: "Nama item",  harga: "Rp 000.000", catatan: "" },
//       { nama: "Nama item",  harga: "Rp 000.000", catatan: "" }
//   ]},
//   { layanan: "Press-On Nails", item: [
//       { nama: "Nama item",  harga: "Rp 000.000", catatan: "" }
//   ]},
//   { layanan: "Eyelash Extensions", item: [
//       { nama: "Nama item",  harga: "Rp 000.000", catatan: "" }
//   ]}
// ];
// ------------------------------------------------------------
const HARGA = [];

// Catatan di bawah judul harga (opsional). Contoh isi: tulis kebijakan harga/pembayaran milikmu sendiri.
const CATATAN_HARGA = "";


// ------------------------------------------------------------
// ⑪ KENAPA RONA  (bagian tiga poin, di bawah galeri)
// Isi hanya hal yang benar dan bisa kamu tunjukkan buktinya (bukan klaim umum).
// Disarankan tepat 3 poin supaya rapi. Contoh bentuk:
//
// const ALASAN = [
//   { judul: "Judul singkat", isi: "Satu atau dua kalimat penjelasan." },
//   { judul: "Judul singkat", isi: "Satu atau dua kalimat penjelasan." },
//   { judul: "Judul singkat", isi: "Satu atau dua kalimat penjelasan." }
// ];
// ------------------------------------------------------------
const ALASAN = [];