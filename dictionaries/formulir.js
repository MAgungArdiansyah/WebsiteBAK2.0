export const formulir = {
  id: {
    eyebrow: "Pelayanan",
    title: "Formulir",
    subtitle:
      "Unduh formulir resmi BAK sesuai keperluan Anda. Seluruh formulir dapat diunduh langsung tanpa perlu login.",
    downloadLabel: "Unduh",
    emptyGroupMessage: "Belum ada formulir yang tersedia untuk kategori ini.",
    groups: [
      {
        category: "Akademik",
        files: [
          { name: "Formulir Cuti Akademik", type: "PDF", size: "240 KB", href: "#" },
          { name: "Formulir Aktif Kembali Kuliah", type: "PDF", size: "180 KB", href: "#" },
        ],
      },
      {
        category: "Kemahasiswaan",
        // Belum ada data. Tambahkan item baru di sini dengan format:
        // { name: "...", type: "PDF" | "DOCX", size: "... KB", href: "https://..." (opsional) }
        files: [],
      },
    ],
  },
  en: {
    eyebrow: "Services",
    title: "Forms",
    subtitle: "Download BAK's official forms as needed. Every form can be downloaded directly, no login required.",
    downloadLabel: "Download",
    emptyGroupMessage: "No forms are available for this category yet.",
    groups: [
      {
        category: "Academic",
        files: [
          { name: "Academic Leave of Absence Form", type: "PDF", size: "240 KB", href: "#" },
          { name: "Return-to-Study Form", type: "PDF", size: "180 KB", href: "#" },
        ],
      },
      {
        category: "Student Affairs",
        // No data yet. Add new items here with the shape:
        // { name: "...", type: "PDF" | "DOCX", size: "... KB", href: "https://..." (optional) }
        files: [],
      },
    ],
  },
};
