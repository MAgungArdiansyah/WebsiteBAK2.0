export const kebijakanWarek = {
  id: {
    eyebrow: "Kebijakan",
    title: "Kebijakan Warek",
    subtitle:
      "Kumpulan kebijakan Wakil Rektor di setiap bidang — Akademik, SDM dan Keuangan, Kemahasiswaan, serta Riset, Inovasi, dan Kemitraan.",
    issuedLabel: "Ditetapkan",
    viewLabel: "Lihat Kebijakan",
    filterAll: "Semua Bidang",
    searchPlaceholder: "Cari kebijakan berdasarkan nama atau nomor dokumen...",
    searchResultsLabel: (n) => `${n} kebijakan ditemukan`,
    noResults: {
      title: "Kebijakan Tidak Ditemukan",
      message: "Coba gunakan kata kunci lain atau pilih bidang yang berbeda.",
    },
    emptyState: {
      title: "Data Belum Tersedia",
      message: "Kebijakan Wakil Rektor untuk saat ini belum tersedia dan akan segera ditambahkan.",
    },
    categories: [
      "Wakil Rektor 1 Bidang Akademik",
      "Wakil Rektor 2 Bidang SDM dan Keuangan",
      "Wakil Rektor 3 Bidang Kemahasiswaan",
      "Wakil Rektor 4 Bidang Riset, Inovasi, dan Kemitraan",
    ],
    // Belum ada data. Tambahkan item baru di sini dengan format:
    // { category: "<salah satu dari daftar categories di atas>", docNumber: "SK/WarekX/xx/2025", title: "...", date: "...", href: "https://..." (opsional) }
    items: [],
  },
  en: {
    eyebrow: "Policy",
    title: "Vice-Rector Policies",
    subtitle:
      "A collection of Vice-Rector policies across every area — Academic Affairs, HR and Finance, Student Affairs, and Research, Innovation, and Partnerships.",
    issuedLabel: "Issued",
    viewLabel: "View Policy",
    filterAll: "All Areas",
    searchPlaceholder: "Search policies by name or document number...",
    searchResultsLabel: (n) => `${n} polic${n === 1 ? "y" : "ies"} found`,
    noResults: {
      title: "No Policies Found",
      message: "Try a different keyword or select another area.",
    },
    emptyState: {
      title: "Data Not Available Yet",
      message: "Vice-Rector policies aren't available yet and will be added soon.",
    },
    categories: [
      "Vice Rector 1 – Academic Affairs",
      "Vice Rector 2 – HR and Finance",
      "Vice Rector 3 – Student Affairs",
      "Vice Rector 4 – Research, Innovation, and Partnerships",
    ],
    // No data yet. Add new items here with the shape:
    // { category: "<one of the categories above>", docNumber: "SK/WarekX/xx/2025", title: "...", date: "...", href: "https://..." (optional) }
    items: [],
  },
};
