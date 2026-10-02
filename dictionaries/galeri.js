const asset = (name) => name;

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  mei: 4,
  may: 4,
  jun: 5,
  jul: 6,
  agu: 7,
  aug: 7,
  sep: 8,
  okt: 9,
  oct: 9,
  nov: 10,
  des: 11,
  dec: 11,
};

function parseActivityDate(value) {
  const idMatch = value.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (idMatch) {
    const [, day, month, year] = idMatch;
    const monthIndex = MONTHS[month.toLowerCase()];
    if (monthIndex !== undefined) return new Date(Number(year), monthIndex, Number(day)).getTime();
  }
  const enMatch = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (enMatch) {
    const [, month, day, year] = enMatch;
    const monthIndex = MONTHS[month.toLowerCase()];
    if (monthIndex !== undefined) return new Date(Number(year), monthIndex, Number(day)).getTime();
  }
  return 0;
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => parseActivityDate(b.date) - parseActivityDate(a.date));
}

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
    noResults: {
      title: "Kegiatan Tidak Ditemukan",
      message: "Belum ada dokumentasi kegiatan untuk kategori ini. Silakan pilih kategori lain.",
    },
    items: [
      {
        slug: "magang-mahasiswa-batch-2-bak-unpak-2026",
        category: "Kegiatan Kampus",
        date: "2 Okt 2026",
        title: "Mahasiswa Magang Batch 2 di BAK Universitas Pakuan",
        excerpt:
          "Program magang mahasiswa Batch 2 di Biro Akademik dan Kemahasiswaan (BAK) Universitas Pakuan telah berjalan dengan lancar. BAK mengucapkan terima kasih kepada seluruh peserta dan mendoakan kesuksesan mereka ke depannya.",
        body: [
          "Program magang mahasiswa Batch 2 di Biro Akademik dan Kemahasiswaan (BAK) Universitas Pakuan telah berjalan dengan lancar. Selama masa magang, para peserta dilibatkan langsung dalam berbagai aktivitas administrasi akademik dan kemahasiswaan di lingkungan BAK.",
          "Pada kesempatan ini, BAK menyampaikan terima kasih yang sebesar-besarnya kepada seluruh mahasiswa yang telah bersedia meluangkan waktu dan tenaga untuk mengikuti program magang kali ini. Semangat dan dedikasi yang ditunjukkan selama masa magang menjadi bagian penting dalam kelancaran pelaksanaan program ini.",
          "Besar harapan kami agar ilmu dan pengalaman yang diperoleh selama magang di BAK dapat menjadi bekal yang bermanfaat ketika memasuki dunia kerja kelak.",
          "Selamat dan sukses selalu untuk seluruh mahasiswa magang Batch 2. Semoga langkah ke depan senantiasa dimudahkan dan membawa keberkahan.",
        ],
        photos: [
          {
            file: asset("magang_batch2.jpeg"),
            caption: "Foto bersama mahasiswa magang Batch 2 beserta pimpinan dan staf BAK Universitas Pakuan",
          },
          {
            file: asset("magang_della.jpeg"),
            caption: "Dianatusifa Dwi Cantika, peserta magang Batch 2 BAK Universitas Pakuan",
          },
          {
            file: asset("magang_isel.jpeg"),
            caption: "Siti Isella Oktavina Suwadi, peserta magang Batch 2 BAK Universitas Pakuan",
          },
          {
            file: asset("magang_eja.jpeg"),
            caption: "Fahreza Aqilla Afdhal, peserta magang Batch 2 BAK Universitas Pakuan",
          },
        ],
      },
      {
        slug: "wisuda-universitas-pakuan-periode-i-2026",
        category: "Wisuda",
        date: "14 Feb 2026",
        title: "Wisuda Universitas Pakuan Periode I 2026",
        excerpt: "Dokumentasi pelaksanaan wisuda Universitas Pakuan Periode I Tahun 2026.",
        body: [
          "Universitas Pakuan menyelenggarakan wisuda Periode I Tahun 2026 yang diikuti oleh ratusan wisudawan dari berbagai program studi. Acara berlangsung khidmat dan dihadiri oleh jajaran pimpinan universitas, dosen, serta keluarga wisudawan.",
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
        date: "27 Des 2025",
        title: "Penerimaan Mahasiswa Baru (PMB) 2026",
        excerpt: "Rangkaian kegiatan penerimaan dan pengenalan kampus bagi mahasiswa baru Universitas Pakuan.",
        body: [
          "Universitas Pakuan menyelenggarakan rangkaian kegiatan Penerimaan Mahasiswa Baru (PMB) 2026, meliputi proses registrasi ulang, pengenalan lingkungan kampus, hingga sesi orientasi akademik bagi mahasiswa baru.",
          "Kegiatan ini bertujuan membantu mahasiswa baru beradaptasi dengan lingkungan perkuliahan, mengenal fasilitas kampus, serta memahami sistem akademik dan kemahasiswaan yang berlaku di Universitas Pakuan.",
          "BAK turut serta dalam penyelenggaraan PMB, khususnya pada aspek administrasi akademik seperti aktivasi Kartu Tanda Mahasiswa (KTM) dan pengarahan awal terkait sistem informasi akademik.",
        ],
        photos: [
          { file: asset("PMB.jpg"), caption: "Mahasiswa baru pada kegiatan Penerimaan Mahasiswa Baru (PMB) 2026" },
        ],
      },
      {
        slug: "bak-ikuti-sertifikasi-iso-rektorat-unpak-2026",
        category: "Kegiatan Kampus",
        date: "3 Sep 2026",
        title: "BAK Ikuti Sertifikasi ISO di Rektorat Universitas Pakuan",
        excerpt:
          "Biro Akademik dan Kemahasiswaan (BAK) turut serta dalam kegiatan sertifikasi ISO yang diselenggarakan di Rektorat Universitas Pakuan sebagai bagian dari upaya peningkatan mutu layanan.",
        body: [
          "Biro Akademik dan Kemahasiswaan (BAK) Universitas Pakuan turut berpartisipasi dalam kegiatan sertifikasi ISO yang diselenggarakan di Rektorat Universitas Pakuan pada 3 September 2026. Kegiatan ini merupakan bagian dari proses audit dan asesmen sistem manajemen mutu yang diikuti oleh berbagai unit kerja di lingkungan universitas.",
          "Dalam sesi tersebut, tim BAK memaparkan penerapan Standar Operasional Prosedur (SOP) pelayanan akademik dan kemahasiswaan di hadapan tim asesor, sekaligus menunjukkan dokumentasi serta bukti pelaksanaan layanan yang telah berjalan sesuai standar yang ditetapkan.",
          "Kegiatan berlangsung secara interaktif melalui presentasi dan diskusi bersama pimpinan universitas, tim manajemen mutu, serta perwakilan unit kerja lainnya, guna memastikan seluruh proses layanan telah memenuhi ketentuan standar ISO yang berlaku.",
          "Melalui keikutsertaan dalam sertifikasi ISO ini, BAK berkomitmen untuk terus meningkatkan mutu dan konsistensi layanan akademik dan kemahasiswaan bagi seluruh sivitas akademika Universitas Pakuan.",
        ],
        photos: [
          { file: asset("Sertifikasi ISO - 1.jpeg"), caption: "Sesi presentasi dan diskusi bersama tim asesor ISO" },
          { file: asset("Sertifikasi ISO - 2.jpeg"), caption: "Tim BAK bersama pimpinan universitas dan tim manajemen mutu" },
          { file: asset("Sertifikasi ISO - 3.jpeg"), caption: "Suasana sesi audit dan asesmen sistem manajemen mutu" },
          { file: asset("Sertifikasi ISO - 4.jpeg"), caption: "Diskusi bersama pimpinan universitas dan perwakilan unit kerja" },
        ],
      },
      // {
      //   slug: "riset-dan-praktikum-mahasiswa",
      //   category: "Kegiatan Kampus",
      //   date: "18 Nov 2025",
      //   title: "Kegiatan Riset dan Praktikum Mahasiswa",
      //   excerpt: "Mahasiswa melaksanakan praktikum dan kegiatan riset di laboratorium kampus sebagai bagian dari penguatan kompetensi akademik.",
      //   body: [
      //     "Mahasiswa dari berbagai program studi rutin melaksanakan kegiatan praktikum dan riset di laboratorium kampus, mulai dari analisis larutan kimia hingga penyusunan laporan hasil penelitian.",
      //     "Kegiatan semacam ini menjadi bagian penting dari kurikulum untuk memperkuat kompetensi riset mahasiswa sekaligus mempersiapkan mereka menghadapi tugas akhir maupun dunia kerja.",
      //     "BAK mendukung kelancaran kegiatan akademik semacam ini melalui koordinasi jadwal dan administrasi yang berkaitan dengan kegiatan laboratorium dan riset mahasiswa.",
      //   ],
      //   photos: [
      //     { file: asset("Riset.JPG"), caption: "Mahasiswa melakukan praktikum di laboratorium kimia" },
      //     { file: asset("DSC05175.JPG"), caption: "Mahasiswa menyusun catatan penelitian di laboratorium riset" },
      //   ],
      // },
      // {
      //   slug: "magang-mahasiswa-radio-kampus",
      //   category: "Kegiatan Kampus",
      //   date: "5 Okt 2025",
      //   title: "Magang Mahasiswa di Radio Kampus",
      //   excerpt: "Mahasiswa mengikuti program magang penyiaran di studio Radio Kampus Universitas Pakuan.",
      //   body: [
      //     "Mahasiswa mengikuti program magang penyiaran di studio Radio Kampus Universitas Pakuan, mempelajari langsung teknik siaran dan produksi konten audio bersama para praktisi.",
      //     "Program magang ini menjadi salah satu bentuk penerapan Merdeka Belajar Kampus Merdeka (MBKM), yang memberikan pengalaman kerja nyata sekaligus mengasah kepercayaan diri dan kemampuan komunikasi publik mahasiswa.",
      //     "BAK memfasilitasi pengakuan kegiatan magang semacam ini ke dalam satuan kredit semester sesuai ketentuan program MBKM yang berlaku.",
      //   ],
      //   photos: [
      //     { file: asset("Internship.JPG"), caption: "Mahasiswa magang di studio Radio Kampus Universitas Pakuan" },
      //     { file: asset("Internship_01.jpg"), caption: "Sesi praktik siaran radio dalam program magang mahasiswa" },
      //   ],
      // },
      // {
      //   slug: "kuliah-tamu-dan-dosen-afiliasi",
      //   category: "Kegiatan Kampus",
      //   date: "22 Sep 2025",
      //   title: "Kuliah Tamu dan Dosen Afiliasi",
      //   excerpt: "Kuliah umum dan diskusi kelas bersama dosen tamu internasional serta dosen afiliasi Universitas Pakuan.",
      //   body: [
      //     "Universitas Pakuan secara berkala menghadirkan dosen tamu dari universitas mitra luar negeri dalam program Visiting Professor, memberikan kuliah umum yang memperluas wawasan akademik mahasiswa dan dosen.",
      //     "Selain itu, dosen afiliasi yang berasal dari luar lingkungan akademik turut dilibatkan dalam sesi diskusi kelas untuk berbagi pengalaman dan perspektif praktis dari industri.",
      //     "Kegiatan ini merupakan bagian dari upaya Universitas Pakuan memperkuat kualitas pembelajaran melalui kolaborasi akademik dan kerja sama institusional.",
      //   ],
      //   photos: [
      //     { file: asset("visiting_prof.JPG"), caption: "Kuliah umum bersama dosen tamu internasional (visiting professor)" },
      //     { file: asset("affiliate_prof.JPG"), caption: "Diskusi kelas bersama dosen afiliasi" },
      //   ],
      // },
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
    noResults: {
      title: "No Activities Found",
      message: "There's no activity documentation for this category yet. Please choose another category.",
    },
    items: [
      {
        slug: "bak-internship-batch-2-students-2026",
        category: "Campus Activities",
        date: "Oct 2, 2026",
        title: "Batch 2 Internship Students at Universitas Pakuan's BAK",
        excerpt:
          "The Batch 2 student internship program at Universitas Pakuan's Bureau of Academic and Student Affairs (BAK) ran smoothly. BAK thanks all participating students and wishes them continued success ahead.",
        body: [
          "The Batch 2 student internship program at Universitas Pakuan's Bureau of Academic and Student Affairs (BAK) ran smoothly. Throughout the internship, participants were directly involved in a range of academic and student administration activities within BAK.",
          "On this occasion, BAK extends its deepest gratitude to all students who took the time and effort to take part in this internship program. The enthusiasm and dedication shown throughout the internship played an important part in the program's smooth running.",
          "We sincerely hope the knowledge and experience gained during the internship at BAK will prove valuable once these students enter the workforce.",
          "Congratulations and continued success to all Batch 2 interns. May your next steps ahead always be made easy and full of blessings.",
        ],
        photos: [
          {
            file: asset("magang_batch2.jpeg"),
            caption: "Group photo of Batch 2 intern students with BAK Universitas Pakuan leadership and staff",
          },
          {
            file: asset("magang_della.jpeg"),
            caption: "Dianatusifa Dwi Cantika, Batch 2 intern at BAK Universitas Pakuan",
          },
          {
            file: asset("magang_isel.jpeg"),
            caption: "Siti Isella Oktavina Suwadi, Batch 2 intern at BAK Universitas Pakuan",
          },
          {
            file: asset("magang_eja.jpeg"),
            caption: "Fahreza Aqilla Afdhal, Batch 2 intern at BAK Universitas Pakuan",
          },
        ],
      },
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
          { file: asset("PMB.jpg"), caption: "New students during the 2026 New Student Admission (PMB) activities" },
        ],
      },
      {
        slug: "bak-joins-iso-certification-unpak-rectorate-2026",
        category: "Campus Activities",
        date: "Sep 3, 2026",
        title: "BAK Takes Part in ISO Certification at the Universitas Pakuan Rectorate",
        excerpt:
          "The Bureau of Academic and Student Affairs (BAK) took part in an ISO certification activity held at the Universitas Pakuan Rectorate as part of ongoing efforts to improve service quality.",
        body: [
          "The Bureau of Academic and Student Affairs (BAK) at Universitas Pakuan took part in an ISO certification activity held at the Universitas Pakuan Rectorate on September 3, 2026. The event was part of a quality management system audit and assessment process involving various work units across the university.",
          "During the session, the BAK team presented how Standard Operating Procedures (SOPs) for academic and student services are implemented, in front of the assessor team, while also showing documentation and evidence that services have been carried out in accordance with the established standards.",
          "The session ran interactively through presentations and discussions with university leadership, the quality management team, and representatives from other work units, to ensure every service process meets the applicable ISO standard requirements.",
          "Through its participation in this ISO certification, BAK reaffirms its commitment to continuously improving the quality and consistency of academic and student services for the entire Universitas Pakuan academic community.",
        ],
        photos: [
          { file: asset("Sertifikasi ISO - 1.jpeg"), caption: "Presentation and discussion session with the ISO assessor team" },
          { file: asset("Sertifikasi ISO - 2.jpeg"), caption: "The BAK team with university leadership and the quality management team" },
          { file: asset("Sertifikasi ISO - 3.jpeg"), caption: "The quality management system audit and assessment session" },
          { file: asset("Sertifikasi ISO - 4.jpeg"), caption: "Discussion with university leadership and unit representatives" },
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

galeri.id.items = sortByDateDesc(galeri.id.items);
galeri.en.items = sortByDateDesc(galeri.en.items);
