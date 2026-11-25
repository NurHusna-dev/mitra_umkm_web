// Logika halaman. Data ada di config.js dan galeri-data.js (tidak perlu diedit di sini).
const hide = el => { el.style.display = "none"; };

// Tombol WhatsApp
document.querySelectorAll("a[data-wa]").forEach(a => {
  a.href = "https://wa.me/" + CONFIG.wa + "?text=" + encodeURIComponent(a.dataset.msg || "Halo, mau booking.");
  a.target = "_blank"; a.rel = "noopener";
});

// Tautan opsional (Instagram, TikTok, dll.): disembunyikan jika kosong
document.querySelectorAll("[data-link]").forEach(el => {
  const v = CONFIG[el.dataset.link];
  if (v) { el.href = v; el.target = "_blank"; el.rel = "noopener"; }
  else { hide(el.closest("li") || el); }
});

// Teks opsional (alamat, jam, nomor)
document.querySelectorAll("[data-text]").forEach(el => {
  const v = CONFIG[el.dataset.text];
  if (v) el.textContent = v; else hide(el.closest("[data-wrap]"));
});

// Peta
const frame = document.querySelector("iframe[data-embed]");
if (CONFIG.mapsEmbed) frame.src = CONFIG.mapsEmbed; else hide(frame.closest("[data-wrap]"));

// ============================================================
// GALERI: filter "Semua" = slider coverflow, filter kategori = grid masonry
// ============================================================
const grid = document.getElementById("galeri-grid");
const filterBox = document.getElementById("galeri-filter");
const prevBtn = document.getElementById("galeri-prev");
const nextBtn = document.getElementById("galeri-next");

GALERI.forEach((g, i) => {
  const fig = document.createElement("figure");
  fig.className = "galeri-item mb-3 break-inside-avoid overflow-hidden rounded-xl";
  fig.dataset.kat = g.kategori || "";
  fig.dataset.rasio = g.rasio || "4/5";
  fig.style.aspectRatio = g.rasio || "4/5";
  const box = document.createElement("div");
  box.className = "zoom w-full h-full";
  if (g.src) {
    const img = new Image();
    img.src = g.src; img.alt = g.alt || ""; img.loading = "lazy";
    img.className = "w-full h-full object-cover";
    box.appendChild(img);
  } else {
    box.classList.add("ph", "ph-" + (i % 4 + 1));
    const t = document.createElement("span");
    t.className = "p-3 text-xs";
    t.textContent = (g.no ? "FOTO " + g.no + " · " : "") + (g.alt || "");
    box.appendChild(t);
  }
  fig.appendChild(box);
  grid.appendChild(fig);
});

let idx = 0;              // halaman slider yang sedang tampil (0, 1, 2, ...)
let modeSlider = true;    // true hanya saat filter "Semua"
let jumlahHalaman = 0;
const PER_HALAMAN = 3;    // jumlah foto yang tampil sekaligus di mode slider

function susunGaleri() {
  grid.classList.toggle("slider", modeSlider);
  const vis = [...grid.querySelectorAll("figure:not(.hidden)")];
  const n = vis.length;

  if (!modeSlider) {
    // Mode grid (filter kategori): tampilan masonry seperti semula
    jumlahHalaman = 0;
    vis.forEach(f => {
      f.style.display = "";
      f.style.aspectRatio = f.dataset.rasio;
    });
    hide(prevBtn); hide(nextBtn);
    return;
  }

  // Mode slider: 3 foto per halaman
  if (!n) return;
  jumlahHalaman = Math.ceil(n / PER_HALAMAN);
  if (idx >= jumlahHalaman) idx = 0;
  // Halaman terakhir diisi mundur supaya tetap menampilkan 3 foto
  let mulai = idx * PER_HALAMAN;
  if (mulai + PER_HALAMAN > n) mulai = Math.max(0, n - PER_HALAMAN);
  vis.forEach((f, i) => {
    f.style.aspectRatio = f.dataset.rasio;
    f.style.display = (i >= mulai && i < mulai + PER_HALAMAN) ? "" : "none";
  });
  const tampilTombol = jumlahHalaman >= 2 ? "" : "none";
  prevBtn.style.display = tampilTombol;
  nextBtn.style.display = tampilTombol;
}

function geser(arah) {
  if (!modeSlider || jumlahHalaman < 2) return;
  idx = (idx + arah + jumlahHalaman) % jumlahHalaman;
  susunGaleri();
}
prevBtn.addEventListener("click", () => geser(-1));
nextBtn.addEventListener("click", () => geser(1));

// Geser jari di HP (hanya aktif di mode slider)
let x0 = null;
grid.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
grid.addEventListener("touchend", e => {
  if (x0 === null) return;
  const d = e.changedTouches[0].clientX - x0;
  x0 = null;
  if (Math.abs(d) > 40) geser(d < 0 ? 1 : -1);
});

// Tombol filter
const katAda = GALERI_KATEGORI.filter(k => GALERI.some(g => g.kategori === k.id));
if (katAda.length < 2) {
  hide(filterBox);
  susunGaleri();
} else {
  const pilihan = [{ id: "", label: "Semua" }, ...katAda];
  const aktifCls = ["bg-cream", "text-wine", "border-cream"];
  const diamCls = ["border-cream/50", "hover:border-cream"];
  const tombol = pilihan.map(k => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = k.label;
    b.dataset.kat = k.id;
    b.className = "rounded-full border px-4 py-2 text-sm font-bold";
    b.addEventListener("click", () => setFilter(k.id));
    filterBox.appendChild(b);
    return b;
  });
  function setFilter(id) {
    tombol.forEach(b => {
      const on = b.dataset.kat === id;
      b.setAttribute("aria-pressed", on);
      aktifCls.forEach(c => b.classList.toggle(c, on));
      diamCls.forEach(c => b.classList.toggle(c, !on));
    });
    grid.querySelectorAll("figure").forEach(f => {
      f.classList.toggle("hidden", id !== "" && f.dataset.kat !== id);
    });
    idx = 0;
    modeSlider = (id === "");
    susunGaleri();
  }
  setFilter("");
}

// ============================================================
// Daftar harga (teks dari konten-data.js)
// ============================================================
const hargaSec = document.getElementById("harga");
const adaHarga = HARGA.some(g => g.item && g.item.length);
if (!adaHarga) {
  hide(hargaSec);
} else {
  const el = (tag, cls, txt) => { const e = document.createElement(tag); e.className = cls; if (txt) e.textContent = txt; return e; };
  const hg = document.getElementById("harga-grid");
  HARGA.forEach(g => {
    if (!g.item || !g.item.length) return;
    const card = el("div", "rounded-2xl bg-maroon p-6");
    card.appendChild(el("h3", "font-extrabold text-xl text-butter", g.layanan));
    const ul = el("ul", "mt-4");
    g.item.forEach(it => {
      const li = el("li", "py-3 border-t border-cream/20");
      const row = el("div", "flex justify-between gap-4");
      row.appendChild(el("span", "text-cream/90", it.nama));
      row.appendChild(el("span", "font-bold whitespace-nowrap", it.harga));
      li.appendChild(row);
      if (it.catatan) li.appendChild(el("p", "mt-1 text-xs text-cream/60", it.catatan));
      ul.appendChild(li);
    });
    card.appendChild(ul);
    hg.appendChild(card);
  });
  const cat = document.getElementById("harga-catatan");
  if (CATATAN_HARGA) cat.textContent = CATATAN_HARGA; else hide(cat);
  // Pintasan di hero: dari "minta lewat WA" menjadi lompat ke daftar harga
  const lh = document.getElementById("linkHarga");
  lh.href = "#harga"; lh.removeAttribute("target"); lh.removeAttribute("rel");
  lh.querySelector("span").textContent = "Lihat daftar harga";
}

// Kenapa EM Beauty
const alasanSec = document.getElementById("alasan");
if (!ALASAN.length) {
  hide(alasanSec);
} else {
  const ul = document.getElementById("alasan-list");
  ALASAN.forEach(a => {
    const li = document.createElement("li");
    const h = document.createElement("h3"); h.className = "font-extrabold text-xl text-butter"; h.textContent = a.judul;
    const p = document.createElement("p"); p.className = "mt-2 text-cream/80 leading-relaxed"; p.textContent = a.isi;
    li.append(h, p); ul.appendChild(li);
  });
}

// Header transparan di paling atas, menjadi solid setelah halaman di-scroll
const hdr = document.getElementById("siteHeader");
const solidCls = hdr.dataset.solid.split(" ");
const cekHeader = () => {
  const on = window.scrollY > 40;
  solidCls.forEach(c => hdr.classList.toggle(c, on));
  hdr.classList.toggle("border-transparent", !on);
};
window.addEventListener("scroll", cekHeader, { passive: true });
cekHeader();

// Menu mobile
const btn = document.getElementById("menuBtn"), menu = document.getElementById("mobileMenu");
btn.addEventListener("click", () => {
  const open = menu.classList.toggle("hidden") === false;
  btn.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.add("hidden"); btn.setAttribute("aria-expanded", "false");
}));

document.getElementById("yr").textContent = new Date().getFullYear();

// Scroll reveal: animasi saat elemen masuk layar
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("tampil"); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(el => obs.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("tampil"));  // browser lama: langsung tampil
}