const asset = (name) => name;

export const galeri = {
  id: {
    eyebrow: "Galeri",
    title: "Galeri Kegiatan",
    subtitle: "Dokumentasi kegiatan akademik dan kemahasiswaan Biro Akademik dan Kemahasiswaan Universitas Pakuan.",
    filterAll: "Semua",
    categories: ["Kegiatan Kampus", "PMB", "Wisuda"],
    readMore: "Lihat Kegiatan",
    backLabel: "Kembali ke Galeri",
    relatedHeading: "Kegiatan Lainnya",
    photoCountLabel: (n) => `${n} foto`,
    items: [
      {
        slug: "wisuda-universitas-pakuan-periode-i-2026",
        category: "Wisuda",
        date: "14 Feb 2026",
        title: "Wisuda Universitas Pakuan Periode I 2026",
        excerpt: "Dokumentasi pelaksanaan wisuda Universitas Pakuan Periode I Tahun 2026 di Graha Pakuan Siliwangi.",
        body: [
          "Universitas Pakuan menyelenggarakan wisuda Periode I Tahun 2026 yang diikuti oleh ratusan wisudawan dari berbagai program studi. Acara berlangsung khidmat di Graha Pakuan Siliwangi dan dihadiri oleh jajaran pimpinan universitas, dosen, serta keluarga wisudawan.",
          "Prosesi wisuda diawali dengan pembacaan janji wisuda oleh perwakilan wisudawan, dilanjutkan dengan penyerahan ijazah secara simbolis dan sambutan dari pimpinan universitas.",
          "BAK berperan dalam memastikan seluruh proses administrasi wisuda, mulai dari pendaftaran hingga penerbitan ijazah, berjalan lancar bagi seluruh wisudawan.",
        ],
        photos: [
          { file: asset("Wisuda 1.JPG"), caption: "Prosesi wisuda di Graha Pakuan Siliwangi" },
          { file: asset("IMG_20250226_232332.jpg"), caption: "Wisudawan mengikuti jalannya upacara wisuda" },
        ],
      },
      {
        slug: "penerimaan-mahasiswa-baru-pmb-2026",
        category: "PMB",
        date: "20 Agu 2025",
        title: "Penerimaan Mahasiswa Baru (PMB) 2026",
        excerpt: "Rangkaian kegiatan penerimaan dan pengenalan kampus bagi mahasiswa baru Universitas Pakuan.",
        body: [
          "Universitas Pakuan menyelenggarakan rangkaian kegiatan Penerimaan Mahasiswa Baru (PMB) 2026, meliputi proses registrasi ulang, pengenalan lingkungan kampus, hingga sesi orientasi akademik bagi mahasiswa baru.",
          "Kegiatan ini bertujuan membantu mahasiswa baru beradaptasi dengan lingkungan perkuliahan, mengenal fasilitas kampus, serta memahami sistem akademik dan kemahasiswaan yang berlaku di Universitas Pakuan.",
          "BAK turut serta dalam penyelenggaraan PMB, khususnya pada aspek administrasi akademik seperti aktivasi Kartu Tanda Mahasiswa (KTM) dan pengarahan awal terkait sistem informasi akademik.",
        ],
        photos: [
          { file: asset("DSC01388.JPG"), caption: "Mahasiswa baru mengenal lingkungan Graha Pakuan Siliwangi" },
          { file: asset("Scolarship.JPG"), caption: "Sesi pengenalan kampus bersama mahasiswa baru" },
          { file: asset("Scolarship_01.jpg"), caption: "Mahasiswa baru berkumpul di ruang belajar bersama" },
        ],
      },
      {
        slug: "riset-dan-praktikum-mahasiswa",
        category: "Kegiatan Kampus",
        date: "18 Nov 2025",
        title: "Kegiatan Riset dan Praktikum Mahasiswa",
        excerpt: "Mahasiswa melaksanakan praktikum dan kegiatan riset di laboratorium kampus sebagai bagian dari penguatan kompetensi akademik.",
        body: [
          "Mahasiswa dari berbagai program studi rutin melaksanakan kegiatan praktikum dan riset di laboratorium kampus, mulai dari analisis larutan kimia hingga penyusunan laporan hasil penelitian.",
          "Kegiatan semacam ini menjadi bagian penting dari kurikulum untuk memperkuat kompetensi riset mahasiswa sekaligus mempersiapkan mereka menghadapi tugas akhir maupun dunia kerja.",
          "BAK mendukung kelancaran kegiatan akademik semacam ini melalui koordinasi jadwal dan administrasi yang berkaitan dengan kegiatan laboratorium dan riset mahasiswa.",
        ],
        photos: [
          { file: asset("Riset.JPG"), caption: "Mahasiswa melakukan praktikum di laboratorium kimia" },
          { file: asset("DSC05175.JPG"), caption: "Mahasiswa menyusun catatan penelitian di laboratorium riset" },
        ],
      },
      {
        slug: "magang-mahasiswa-radio-kampus",
        category: "Kegiatan Kampus",
        date: "5 Okt 2025",
        title: "Magang Mahasiswa di Radio Kampus",
        excerpt: "Mahasiswa mengikuti program magang penyiaran di studio Radio Kampus Universitas Pakuan.",
        body: [
          "Mahasiswa mengikuti program magang penyiaran di studio Radio Kampus Universitas Pakuan, mempelajari langsung teknik siaran dan produksi konten audio bersama para praktisi.",
          "Program magang ini menjadi salah satu bentuk penerapan Merdeka Belajar Kampus Merdeka (MBKM), yang memberikan pengalaman kerja nyata sekaligus mengasah kepercayaan diri dan kemampuan komunikasi publik mahasiswa.",
          "BAK memfasilitasi pengakuan kegiatan magang semacam ini ke dalam satuan kredit semester sesuai ketentuan program MBKM yang berlaku.",
        ],
        photos: [
          { file: asset("Internship.JPG"), caption: "Mahasiswa magang di studio Radio Kampus Universitas Pakuan" },
          { file: asset("Internship_01.jpg"), caption: "Sesi praktik siaran radio dalam program magang mahasiswa" },
        ],
      },
      {
        slug: "kuliah-tamu-dan-dosen-afiliasi",
        category: "Kegiatan Kampus",
        date: "22 Sep 2025",
        title: "Kuliah Tamu dan Dosen Afiliasi",
        excerpt: "Kuliah umum dan diskusi kelas bersama dosen tamu internasional serta dosen afiliasi Universitas Pakuan.",
        body: [
          "Universitas Pakuan secara berkala menghadirkan dosen tamu dari universitas mitra luar negeri dalam program Visiting Professor, memberikan kuliah umum yang memperluas wawasan akademik mahasiswa dan dosen.",
          "Selain itu, dosen afiliasi yang berasal dari luar lingkungan akademik turut dilibatkan dalam sesi diskusi kelas untuk berbagi pengalaman dan perspektif praktis dari industri.",
          "Kegiatan ini merupakan bagian dari upaya Universitas Pakuan memperkuat kualitas pembelajaran melalui kolaborasi akademik dan kerja sama institusional.",
        ],
        photos: [
          { file: asset("visiting_prof.JPG"), caption: "Kuliah umum bersama dosen tamu internasional (visiting professor)" },
          { file: asset("affiliate_prof.JPG"), caption: "Diskusi kelas bersama dosen afiliasi" },
        ],
      },
    ],
  },
  en: {
    eyebrow: "Gallery",
    title: "Activity Gallery",
    subtitle: "Documentation of academic and student activities from BAK Universitas Pakuan.",
    filterAll: "All",
    categories: ["Campus Activities", "PMB", "Graduation"],
    readMore: "View Activity",
    backLabel: "Back to Gallery",
    relatedHeading: "More Activities",
    photoCountLabel: (n) => `${n} photo${n === 1 ? "" : "s"}`,
    items: [
      {
        slug: "universitas-pakuan-graduation-period-i-2026",
        category: "Graduation",
        date: "Feb 14, 2026",
        title: "Universitas Pakuan Graduation Period I 2026",
        excerpt: "Documentation of Universitas Pakuan's Period I 2026 graduation ceremony at Graha Pakuan Siliwangi.",
        body: [
          "Universitas Pakuan held its Period I 2026 graduation ceremony, attended by hundreds of graduates from various study programs. The event was held solemnly at Graha Pakuan Siliwangi, attended by university leadership, faculty, and graduates' families.",
          "The ceremony began with the graduation pledge read by a graduate representative, followed by the symbolic handover of diplomas and remarks from university leadership.",
          "BAK ensured the entire graduation administration process, from registration to diploma issuance, ran smoothly for every graduate.",
        ],
        photos: [
          { file: asset("Wisuda 1.JPG"), caption: "Graduation procession at Graha Pakuan Siliwangi" },
          { file: asset("IMG_20250226_232332.jpg"), caption: "Graduates attending the ceremony" },
        ],
      },
      {
        slug: "new-student-admission-pmb-2026",
        category: "PMB",
        date: "Aug 20, 2025",
        title: "New Student Admission (PMB) 2026",
        excerpt: "A series of admission and campus orientation activities for Universitas Pakuan's new students.",
        body: [
          "Universitas Pakuan held its New Student Admission (PMB) 2026 activities, including re-registration, campus orientation, and academic briefing sessions for new students.",
          "The activities help new students adapt to campus life, get familiar with campus facilities, and understand Universitas Pakuan's academic and student administration systems.",
          "BAK took part in organizing PMB, particularly on the academic administration side, such as Student ID Card (KTM) activation and an initial briefing on the academic information system.",
        ],
        photos: [
          { file: asset("DSC01388.JPG"), caption: "New students exploring Graha Pakuan Siliwangi" },
          { file: asset("Scolarship.JPG"), caption: "Campus orientation session with new students" },
          { file: asset("Scolarship_01.jpg"), caption: "New students gathered in the shared study space" },
        ],
      },
      {
        slug: "student-research-and-lab-practicum",
        category: "Campus Activities",
        date: "Nov 18, 2025",
        title: "Student Research and Lab Practicum",
        excerpt: "Students carry out lab practicums and research activities as part of strengthening their academic competencies.",
        body: [
          "Students from various study programs regularly carry out practicums and research in campus laboratories, from chemical solution analysis to compiling research reports.",
          "Activities like these are an important part of the curriculum, strengthening students' research skills while preparing them for their final thesis and future careers.",
          "BAK supports these academic activities by coordinating schedules and administration related to lab and research work.",
        ],
        photos: [
          { file: asset("Riset.JPG"), caption: "Students conducting a chemistry lab practicum" },
          { file: asset("DSC05175.JPG"), caption: "A student compiling research notes in the research lab" },
        ],
      },
      {
        slug: "student-internship-campus-radio",
        category: "Campus Activities",
        date: "Oct 5, 2025",
        title: "Student Internship at Campus Radio",
        excerpt: "Students take part in a broadcasting internship at Universitas Pakuan's Campus Radio studio.",
        body: [
          "Students take part in a broadcasting internship at Universitas Pakuan's Campus Radio studio, learning live broadcasting techniques and audio content production alongside industry practitioners.",
          "The program is one of the university's implementations of the Merdeka Belajar Kampus Merdeka (MBKM) initiative, giving students real work experience while building confidence and public communication skills.",
          "BAK facilitates the credit recognition of internships like this in line with applicable MBKM program requirements.",
        ],
        photos: [
          { file: asset("Internship.JPG"), caption: "Students interning at Universitas Pakuan's Campus Radio studio" },
          { file: asset("Internship_01.jpg"), caption: "A broadcast practice session during the internship program" },
        ],
      },
      {
        slug: "guest-and-affiliate-lecturers",
        category: "Campus Activities",
        date: "Sep 22, 2025",
        title: "Guest and Affiliate Lecturers",
        excerpt: "Public lectures and class discussions with international visiting professors and affiliate lecturers.",
        body: [
          "Universitas Pakuan regularly hosts guest lecturers from partner universities abroad through its Visiting Professor program, delivering public lectures that broaden the academic perspective of students and faculty.",
          "In addition, affiliate lecturers from outside academia are involved in class discussions, sharing practical experience and industry perspectives.",
          "These activities are part of Universitas Pakuan's efforts to strengthen the quality of learning through academic collaboration and institutional partnerships.",
        ],
        photos: [
          { file: asset("visiting_prof.JPG"), caption: "Public lecture with an international visiting professor" },
          { file: asset("affiliate_prof.JPG"), caption: "Class discussion with an affiliate lecturer" },
        ],
      },
    ],
  },
};
