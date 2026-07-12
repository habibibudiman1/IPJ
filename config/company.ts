export const COMPANY_CONFIG = {
  legalName: "PT. Intiboga Pangan Jaya",
  shortName: "Intiboga Pangan Jaya",
  establishedYear: 2020, // Dasar perhitungan tahun pengalaman

  // Kontak Utama
  contact: {
    phone: "+62 813 6119 6131",
    phoneLink: "tel:+6281361196131",
    email: "faridalfarizi@intiboga.com",
    emailLink: "mailto:faridalfarizi@intiboga.com",
    whatsapp: "https://wa.me/6281361196131",
  },

  // Alamat Fisik / Logistik
  address: {
    city: "Bandung",
    province: "Jawa Barat",
    postalCode: "40376",
    country: "Indonesia",
    fullAddress: "JL. Raya Rancaekek – Majalaya No. 254, Kel. Solokanjeruk, Kec. Solokanjeruk, Bandung, Jawa Barat 40376, Indonesia (Warehouse)",
  },

  // Statistik Riil (Untuk B2B)
  stats: {
    get experienceYears() {
      // Menghitung umur secara otomatis dari tahun berdiri (2020)
      const currentYear = new Date().getFullYear();
      const diff = currentYear - COMPANY_CONFIG.establishedYear;
      return diff > 0 ? diff : 6; // fallback ke 6 tahun jika kalkulasi waktu lokal aneh
    },
    clientsServed: "150+",
    productsAvailable: "30+",
  },

  // Sertifikasi Resmi
  certifications: [
    { name: "Halal Indonesia", id: "ID0021000025..." },
    { name: "BPOM RI MD", id: "MD 275728..." },
    { name: "HACCP Certified", status: "Compliant" },
  ]
};
