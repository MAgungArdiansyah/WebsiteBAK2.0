export const rektorWarek = {
  id: {
    eyebrow: "Pengumuman",
    title: "Pengumuman Rektor / Warek",
    subtitle: "Surat edaran dan surat keputusan resmi dari Rektor serta Wakil Rektor Universitas Pakuan.",
    viewLabel: "Lihat Surat",
    updatedLabel: "Diterbitkan",
    searchPlaceholder: "Cari surat berdasarkan judul atau nomor dokumen...",
    searchResultsLabel: (n) => `${n} surat ditemukan`,
    noResults: {
      title: "Surat Tidak Ditemukan",
      message: "Coba gunakan kata kunci lain.",
    },
    emptyState: {
      title: "Data Belum Tersedia",
      message: "Pengumuman Rektor / Wakil Rektor untuk saat ini belum tersedia dan akan segera ditambahkan.",
    },
    // Belum ada data. Tambahkan item baru di sini dengan format:
    // { docNumber: "SE/Rektor/xx/2026", title: "...", issuer: "Rektor" | "Wakil Rektor I" | dst., date: "...", href: "https://..." (opsional) }
    items: [],
  },
  en: {
    eyebrow: "Announcements",
    title: "Rector / Vice-Rector Notices",
    subtitle: "Official circulars and decisions from the Rector and Vice-Rectors of Universitas Pakuan.",
    viewLabel: "View Letter",
    updatedLabel: "Issued",
    searchPlaceholder: "Search letters by title or document number...",
    searchResultsLabel: (n) => `${n} letter${n === 1 ? "" : "s"} found`,
    noResults: {
      title: "No Letters Found",
      message: "Try a different keyword.",
    },
    emptyState: {
      title: "Data Not Available Yet",
      message: "Rector / Vice-Rector notices aren't available yet and will be added soon.",
    },
    // No data yet. Add new items here with the shape:
    // { docNumber: "SE/Rektor/xx/2026", title: "...", issuer: "Rector" | "Vice-Rector I" | etc., date: "...", href: "https://..." (optional) }
    items: [],
  },
};
