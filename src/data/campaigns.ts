export interface Campaign {
  slug: string;
  title: string;
  titleEn: string;
  org: string;
  category: 'kemanusiaan' | 'pendidikan' | 'infrastruktur' | 'charity' | 'lingkungan';
  description: string;
  descriptionEn: string;
  fullDesc: string;
  fullDescEn: string;
  target: number;
  raised: number;
  donors: number;
  daysLeft: number;
  image: string;
  urgent?: boolean;
  featured?: boolean;
}

export const campaigns: Campaign[] = [
  {
    slug: 'bantu-korban-banjir-kalimantan',
    title: 'Bantu Korban Banjir Kalimantan Tengah',
    titleEn: 'Help Flood Victims in Central Kalimantan',
    org: 'Yayasan Indonesia Peduli',
    category: 'kemanusiaan',
    description: 'Ribuan warga terdampak banjir membutuhkan bantuan segera berupa makanan, air bersih, dan tempat berlindung.',
    descriptionEn: 'Thousands of flood victims urgently need food, clean water, and shelter.',
    fullDesc: `<p>Banjir besar yang melanda Kalimantan Tengah telah menyebabkan ribuan keluarga kehilangan tempat tinggal dan akses terhadap kebutuhan dasar. Kami bergerak cepat untuk menyalurkan bantuan kepada para korban.</p>
    <h3>Program Bantuan</h3>
    <ul>
      <li>Distribusi paket sembako (beras, minyak, mi instan)</li>
      <li>Air bersih dan tenda darurat</li>
      <li>Perlengkapan bayi dan anak</li>
      <li>Obat-obatan dan tim medis</li>
    </ul>
    <h3>Laporan Penggunaan Dana</h3>
    <p>Seluruh dana yang terkumpul akan digunakan 100% untuk bantuan korban. Laporan penggunaan akan dipublikasikan setiap minggu secara transparan.</p>`,
    fullDescEn: `<p>Massive floods in Central Kalimantan have left thousands of families homeless and without access to basic necessities. We are moving quickly to provide aid to victims.</p>
    <h3>Aid Program</h3>
    <ul>
      <li>Basic food packages (rice, oil, instant noodles)</li>
      <li>Clean water and emergency tents</li>
      <li>Baby and children supplies</li>
      <li>Medicines and medical team</li>
    </ul>`,
    target: 500000000,
    raised: 362500000,
    donors: 4218,
    daysLeft: 12,
    image: '/images/campaign-kemanusiaan.jpg',
    urgent: true,
    featured: true,
  },
  {
    slug: 'beasiswa-anak-pedalaman-papua',
    title: 'Beasiswa Pendidikan Anak Pedalaman Papua',
    titleEn: 'Scholarships for Children in Remote Papua',
    org: 'Gerakan Pendidikan Nusantara',
    category: 'pendidikan',
    description: 'Wujudkan mimpi anak-anak Papua dengan memberikan akses pendidikan berkualitas melalui program beasiswa.',
    descriptionEn: 'Realize the dreams of Papuan children by providing access to quality education through scholarship programs.',
    fullDesc: `<p>Anak-anak di pedalaman Papua memiliki semangat belajar yang tinggi, namun keterbatasan fasilitas dan biaya menjadi penghalang utama. Program beasiswa ini dirancang untuk menjembatani kesenjangan tersebut.</p>
    <h3>Manfaat Beasiswa</h3>
    <ul>
      <li>Biaya pendidikan SD hingga SMA</li>
      <li>Perlengkapan sekolah (buku, seragam, tas)</li>
      <li>Asrama dan makan sehari-hari</li>
      <li>Bimbingan belajar intensif</li>
    </ul>`,
    fullDescEn: `<p>Children in remote Papua have a strong desire to learn, but limited facilities and costs are major obstacles. This scholarship program is designed to bridge that gap.</p>`,
    target: 300000000,
    raised: 215000000,
    donors: 2891,
    daysLeft: 45,
    image: '/images/campaign-pendidikan.jpg',
    featured: true,
  },
  {
    slug: 'jembatan-desa-terpencil-NTT',
    title: 'Bangun Jembatan Desa Terpencil NTT',
    titleEn: 'Build a Bridge in Remote NTT Village',
    org: 'Komunitas Infrastruktur Nusantara',
    category: 'infrastruktur',
    description: 'Jembatan darurat yang sudah rapuh menjadi satu-satunya akses warga ke pasar dan fasilitas kesehatan.',
    descriptionEn: 'A crumbling emergency bridge is the only access for residents to markets and health facilities.',
    fullDesc: `<p>Desa Wairterang di NTT hanya memiliki satu jembatan kayu yang sudah lapuk untuk akses ke dunia luar. Setiap musim hujan, warga terisolasi karena jembatan tidak dapat dilalui. Anak-anak harus memutar jalan jauh untuk bersekolah.</p>
    <h3>Rencana Pembangunan</h3>
    <ul>
      <li>Konstruksi jembatan beton sepanjang 25 meter</li>
      <li>Melibatkan tenaga lokal</li>
      <li>Target selesai 4 bulan</li>
      <li>Kapasitas 10 ton</li>
    </ul>`,
    fullDescEn: `<p>Wairterang village in NTT has only one rotting wooden bridge for access to the outside world. During every rainy season, residents are isolated. Children must take long detours to school.</p>`,
    target: 800000000,
    raised: 452000000,
    donors: 3102,
    daysLeft: 60,
    image: '/images/hero-banner.jpg',
    featured: true,
  },
  {
    slug: 'panti-asuhan-yatim-sulawesi',
    title: 'Renovasi Panti Asuhan Yatim Sulawesi',
    titleEn: 'Renovate Orphanage in Sulawesi',
    org: 'Yayasan Kasih Anak Bangsa',
    category: 'charity',
    description: '87 anak yatim membutuhkan hunian yang layak. Bangunan panti sudah sangat tua dan memerlukan renovasi mendesak.',
    descriptionEn: '87 orphans need proper housing. The orphanage building is very old and urgently needs renovation.',
    fullDesc: `<p>Panti Asuhan Al-Ikhlas di Makassar menampung 87 anak yatim piatu. Bangunan yang berusia 30 tahun ini membutuhkan renovasi menyeluruh agar anak-anak bisa tinggal dengan nyaman dan aman.</p>
    <h3>Rencana Renovasi</h3>
    <ul>
      <li>Perbaikan atap dan dinding</li>
      <li>Renovasi kamar tidur dan kamar mandi</li>
      <li>Pembangunan ruang belajar baru</li>
      <li>Instalasi air bersih dan listrik</li>
    </ul>`,
    fullDescEn: `<p>Al-Ikhlas Orphanage in Makassar houses 87 orphans. The 30-year-old building needs comprehensive renovation so children can live comfortably and safely.</p>`,
    target: 350000000,
    raised: 198000000,
    donors: 1654,
    daysLeft: 30,
    image: '/images/campaign-kemanusiaan.jpg',
    featured: true,
  },
  {
    slug: 'tanam-pohon-hutan-borneo',
    title: 'Tanam 50.000 Pohon di Hutan Borneo',
    titleEn: 'Plant 50,000 Trees in Borneo Forest',
    org: 'Green Indonesia Foundation',
    category: 'lingkungan',
    description: 'Pulihkan hutan Borneo dari deforestasi. Setiap donasi Rp 25.000 menanam satu pohon yang terverifikasi.',
    descriptionEn: 'Restore Borneo forest from deforestation. Every Rp 25,000 donation plants one verified tree.',
    fullDesc: `<p>Deforestasi di Borneo telah mencapai tingkat yang mengkhawatirkan. Program penanaman pohon ini tidak hanya memulihkan ekosistem, tetapi juga memberikan penghidupan bagi masyarakat lokal.</p>
    <h3>Dampak Program</h3>
    <ul>
      <li>50.000 pohon ditanam dengan GPS tracking</li>
      <li>Penyerapan 2.500 ton CO₂ per tahun</li>
      <li>Pemberdayaan 200 petani lokal</li>
      <li>Laporan foto/video setiap pohon</li>
    </ul>`,
    fullDescEn: `<p>Deforestation in Borneo has reached alarming levels. This tree planting program not only restores the ecosystem but also provides livelihoods for local communities.</p>`,
    target: 1250000000,
    raised: 687000000,
    donors: 8932,
    daysLeft: 90,
    image: '/images/campaign-pendidikan.jpg',
    featured: true,
  },
  {
    slug: 'air-bersih-desa-lombok',
    title: 'Air Bersih untuk Desa-Desa Lombok',
    titleEn: 'Clean Water for Lombok Villages',
    org: 'Yayasan Air untuk Kehidupan',
    category: 'infrastruktur',
    description: 'Pembangunan sumur bor dan sistem distribusi air bersih untuk 5 desa di Lombok yang masih kekurangan air.',
    descriptionEn: 'Construction of boreholes and clean water distribution for 5 villages in Lombok still lacking water.',
    fullDesc: `<p>Lima desa di Lombok Timur masih mengandalkan air sungai yang tidak layak konsumsi. Program ini akan membangun sumur bor berkedalaman 80 meter dan jaringan pipa ke setiap rumah tangga.</p>`,
    fullDescEn: `<p>Five villages in East Lombok still rely on unsuitable river water. This program will build 80-meter deep boreholes and pipe networks to each household.</p>`,
    target: 425000000,
    raised: 310000000,
    donors: 2210,
    daysLeft: 25,
    image: '/images/hero-banner.jpg',
  },
  {
    slug: 'beasiswa-sma-aceh',
    title: 'Beasiswa SMA untuk Anak Aceh Berprestasi',
    titleEn: 'High School Scholarships for Talented Aceh Students',
    org: 'Yayasan Generasi Harapan',
    category: 'pendidikan',
    description: '50 siswa berprestasi dari keluarga kurang mampu di Aceh membutuhkan dukungan biaya pendidikan.',
    descriptionEn: '50 high-achieving students from underprivileged families in Aceh need educational funding support.',
    fullDesc: `<p>Program beasiswa ini menyasar 50 siswa berprestasi dari keluarga kurang mampu di Aceh. Dengan dukungan Anda, mereka dapat melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>`,
    fullDescEn: `<p>This scholarship program targets 50 high-achieving students from underprivileged families in Aceh.</p>`,
    target: 200000000,
    raised: 145000000,
    donors: 1890,
    daysLeft: 40,
    image: '/images/campaign-pendidikan.jpg',
  },
  {
    slug: 'bank-sampah-surabaya',
    title: 'Bank Sampah Digital untuk Surabaya',
    titleEn: 'Digital Waste Bank for Surabaya',
    org: 'EcoTech Indonesia',
    category: 'lingkungan',
    description: 'Membangun sistem bank sampah digital yang menghubungkan masyarakat dengan pengepul sampah terdekat.',
    descriptionEn: 'Building a digital waste bank system connecting communities with the nearest waste collectors.',
    fullDesc: `<p>Program ini akan mengembangkan aplikasi dan infrastruktur bank sampah digital di 20 kelurahan Surabaya, memudahkan warga memilah dan menjual sampah daur ulang.</p>`,
    fullDescEn: `<p>This program will develop digital waste bank apps and infrastructure in 20 Surabaya sub-districts.</p>`,
    target: 180000000,
    raised: 87000000,
    donors: 743,
    daysLeft: 55,
    image: '/images/campaign-pendidikan.jpg',
  },
];

export const categories = [
  { id: 'kemanusiaan',   labelId: 'Kemanusiaan',  labelEn: 'Humanitarian', icon: '❤️',  color: '#fee2e2', count: 24 },
  { id: 'pendidikan',    labelId: 'Pendidikan',   labelEn: 'Education',    icon: '📚',  color: '#dbeafe', count: 31 },
  { id: 'infrastruktur', labelId: 'Infrastruktur',labelEn: 'Infrastructure',icon: '🏗️', color: '#fef9c3', count: 18 },
  { id: 'charity',       labelId: 'Charity',      labelEn: 'Charity',      icon: '🤲',  color: '#fae8ff', count: 15 },
  { id: 'lingkungan',    labelId: 'Lingkungan',   labelEn: 'Environment',  icon: '🌿',  color: '#dcfce7', count: 22 },
];

export const testimonials = [
  { name: 'Siti Rahma', role: 'Donatur Tetap', text: 'Saya sudah berdonasi lebih dari 2 tahun di Indonesia Peduli Sesama. Transparansi laporan penggunaan dananya sangat meyakinkan.', textEn: 'I have been donating for over 2 years at Indonesia Peduli Sesama. The transparency of fund usage reports is very reassuring.', initial: 'SR' },
  { name: 'Budi Santoso', role: 'Relawan Aktif', text: 'Bergabung sebagai relawan adalah keputusan terbaik saya. Tim yang profesional dan program yang tepat sasaran.', textEn: 'Joining as a volunteer was my best decision. A professional team with well-targeted programs.', initial: 'BS' },
  { name: 'Dewi Lestari', role: 'Penggalang Dana', text: 'Mudah sekali membuat kampanye di sini. Dalam 2 minggu, target Rp 50 juta untuk renovasi sekolah desa kami tercapai!', textEn: 'It was so easy to create a campaign here. In 2 weeks, our Rp 50 million target for village school renovation was achieved!', initial: 'DL' },
  { name: 'Ahmad Fauzi', role: 'Donatur', text: 'Laporan kampanye yang detail dan update berkala membuat saya yakin donasi saya benar-benar sampai ke yang membutuhkan.', textEn: 'Detailed campaign reports and regular updates make me confident my donation truly reaches those in need.', initial: 'AF' },
  { name: 'Rina Wijaya', role: 'Penggalang Dana', text: 'Platform terbaik untuk crowdfunding sosial di Indonesia. Proses verifikasi kampanye yang ketat menjamin kepercayaan donatur.', textEn: 'The best platform for social crowdfunding in Indonesia. Strict campaign verification ensures donor trust.', initial: 'RW' },
  { name: 'Fajar Nugroho', role: 'Donatur & Relawan', text: 'Fitur berbagi yang mudah membantu kampanye saya viral di media sosial. Terimakasih Indonesia Peduli Sesama!', textEn: 'Easy sharing features helped my campaign go viral on social media. Thank you Indonesia Peduli Sesama!', initial: 'FN' },
];

export function formatRupiah(amount: number): string {
  if (amount >= 1000000000) {
    return `Rp ${(amount / 1000000000).toFixed(1)} M`;
  } else if (amount >= 1000000) {
    return `Rp ${(amount / 1000000).toFixed(0)} Jt`;
  } else if (amount >= 1000) {
    return `Rp ${(amount / 1000).toFixed(0)} Rb`;
  }
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

export function formatRupiahFull(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

export function getPercent(raised: number, target: number): number {
  return Math.min(Math.round((raised / target) * 100), 100);
}
