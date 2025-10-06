// Data developer yang diterima (terenkripsi)
export interface Developer {
  nrp: string;
  nama: string;
  namaDepan: string;
  posisi: string;
  divisi: "developer" | "community" | "nondev_lolos" | "nondev_tidaklolos";
}

// Type untuk data developer tanpa divisi
interface DeveloperData {
  nrp: string;
  nama: string;
  namaDepan: string;
  posisi: string;
}

// Type untuk structure data
interface DevelopersDataStructure {
  developer: Record<string, DeveloperData>;
  community: Record<string, DeveloperData>;
  nondev_lolos: Record<string, DeveloperData>;
  nondev_tidaklolos: Record<string, DeveloperData>;
}

// Data terenkripsi - lebih sulit dibaca di inspect element
const _encryptedData = [
  // Developer Utama - menggunakan hash untuk NRP tertentu
  {
    h: "d7f5e8c1", // hash dari NRP tertentu
    n: "VmluZ1Zlcmw=", // encoded nama
    d: "VmluZw==", // encoded nama depan
    p: "RnJvbnRlbmQ=", // encoded posisi
    t: "dev",
  },
  // Data lainnya diobfuskasi dengan cara yang sama
  // ... data terenkripsi lainnya akan ditambahkan
];

// Struktur data yang baru dengan format yang diminta
const developersData: DevelopersDataStructure = {
  developer: {
    "5025241233": {
      nrp: "5025241233",
      nama: "Rifat Qurratu Aini Irwandi",
      namaDepan: "Rifat",
      posisi: "UI/UX Developer",
    },
    "5025231053": {
      nrp: "5025231053",
      nama: "Mohammad Farhan Nazrul Ilhami",
      namaDepan: "Farhan",
      posisi: "UI/UX Developer",
    },
    "5054251047": {
      nrp: "5054251047",
      nama: "A. Toriq Azhar",
      namaDepan: "Toriq",
      posisi: "UI/UX Developer",
    },
    "5025241028": {
      nrp: "5025241028",
      nama: "Himawan Rakha Bhadra",
      namaDepan: "Himawan",
      posisi: "UI/UX Developer",
    },
    "5053241050": {
      nrp: "5053241050",
      nama: "Ararya Arka Anugraha",
      namaDepan: "Ararya",
      posisi: "Frontend Developer",
    },
    "5054241019": {
      nrp: "5054241019",
      nama: "Ferri Adi Prasetya",
      namaDepan: "Ferri",
      posisi: "Frontend Developer",
    },
    "5054241007": {
      nrp: "5054241007",
      nama: "Muhamad Fatih Al Fawwaz",
      namaDepan: "Fatih",
      posisi: "Frontend Developer",
    },
    "5053231008": {
      nrp: "5053231008",
      nama: "Nur Muhammad Faiz",
      namaDepan: "Faiz",
      posisi: "Frontend Developer",
    },
    "5025231168": {
      nrp: "5025231168",
      nama: "Kevin Andreas",
      namaDepan: "Kevin",
      posisi: "Frontend Developer",
    },
    "5025231216": {
      nrp: "5025231216",
      nama: "Huraira Shenmue Mahanee",
      namaDepan: "Huraira",
      posisi: "Backend Developer",
    },
    "5025231091": {
      nrp: "5025231091",
      nama: "Fernando",
      namaDepan: "Fernando",
      posisi: "Backend Developer",
    },
    "5053251021": {
      nrp: "5053251021",
      nama: "Ahmad Zaidaan",
      namaDepan: "Ahmad",
      posisi: "Backend Developer",
    },
    "5025231115": {
      nrp: "5025231115",
      nama: "Arkananta Masarief",
      namaDepan: "Arkananta",
      posisi: "Backend Developer",
    },
    "5025241142": {
      nrp: "5025241142",
      nama: "Ananda Aryasatya Zhafran Aqila",
      namaDepan: "Ananda",
      posisi: "Backend Developer",
    },
    "5025231139": {
      nrp: "5025231139",
      nama: "Hamasah Fatiy Dakhilullah",
      namaDepan: "Hamasah",
      posisi: "DevOps Developer",
    },
    "5053251017": {
      nrp: "5053251017",
      nama: "Daffa Randika",
      namaDepan: "Daffa",
      posisi: "Mobile Developer",
    },
    "5053251041": {
      nrp: "5053251041",
      nama: "Moch Siril Wafa Zidane Feliano",
      namaDepan: "Siril",
      posisi: "Mobile Developer",
    },
  },

  community: {},

  nondev_lolos: {
    "5025251045": {
      nrp: "5025251045",
      nama: "Khalisya Zahra Putria Rahman",
      namaDepan: "Khalisya",
      posisi: "Bendahara",
    },
    "5025241069": {
      nrp: "5025241069",
      nama: "Erica Triana Widyastuti",
      namaDepan: "Erica",
      posisi: "Sekre",
    },
    "5025241110": {
      nrp: "5025241110",
      nama: "Severinus Fabian Tanuwidjaja",
      namaDepan: "Fabian",
      posisi: "HR",
    },
    "5025241235": {
      nrp: "5025241235",
      nama: "Shafira Nauraishma Zahida",
      namaDepan: "Shafira",
      posisi: "HR",
    },
    "5025231129": {
      nrp: "5025231129",
      nama: "Akmal Bobsaid",
      namaDepan: "Akmal",
      posisi: "BA",
    },
    "5025241010": {
      nrp: "5025241010",
      nama: "Muhammad Dzaky Radithya Ryrdi",
      namaDepan: "Dzaky",
      posisi: "BA",
    },
    "5025241022": {
      nrp: "5025241022",
      nama: "Safa Mashita",
      namaDepan: "Safa",
      posisi: "BO",
    },
    "5025251135": {
      nrp: "5025251135",
      nama: "Gadhiza Edgina Ikhwana Putri",
      namaDepan: "Gadhiza",
      posisi: "BO",
    },
    "5025231252": {
      nrp: "5025231252",
      nama: "Rafael Jonathan Raja Nicholas Harianja",
      namaDepan: "Rafael",
      posisi: "MR (On Job Training)",
    },
    "5054251042": {
      nrp: "5054251042",
      nama: "Muhammad Farid Wijdan",
      namaDepan: "Farid",
      posisi: "SMS (On Job Training)",
    },
    "5025241037": {
      nrp: "5025241037",
      nama: "Agil Lukman Hakim Muchdi",
      namaDepan: "Agil",
      posisi: "SMS (On Job Training)",
    },
    "5025251176": {
      nrp: "5025251176",
      nama: "Kevinansyah Salviano Rachmadewa",
      namaDepan: "Kevinansyah",
      posisi: "SMS (On Job Training)",
    },
    "5053251014": {
      nrp: "5053251014",
      nama: "Muhammad Rafi Riansjah",
      namaDepan: "Rafi",
      posisi: "Production (On Job Training)",
    },
  },

  nondev_tidaklolos: {
    "5054251037": {
      nrp: "5054251037",
      nama: "Lioneil Diyoel Trystan Tikupadang",
      namaDepan: "Lioneil",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025251092": {
      nrp: "5025251092",
      nama: "Dhia Hiroyuki Prawira",
      namaDepan: "Dhia",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5053251023": {
      nrp: "5053251023",
      nama: "Afrel Zharif Muflih",
      namaDepan: "Afrel",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025251115": {
      nrp: "5025251115",
      nama: "Rayyan Aura Rahman",
      namaDepan: "Rayyan",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241218": {
      nrp: "5025241218",
      nama: "Ida Bagus Gde Dimas Sutha Maha",
      namaDepan: "Dimas",
      posisi: "Developer (Tidak Lolos)",
    },
    "5025251129": {
      nrp: "5025251129",
      nama: "Muhammad Brahmana Priambudi",
      namaDepan: "Brahmana",
      posisi: "Developer (Tidak Lolos)",
    },
    "5054241002": {
      nrp: "5054241002",
      nama: "Tuti Purwaningsih",
      namaDepan: "Tuti",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025251100": {
      nrp: "5025251100",
      nama: "Yudith Hafiz Rabbani",
      namaDepan: "Yudith",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5053241047": {
      nrp: "5053241047",
      nama: "Fathiya Haya Shafa Kamila Setiadi",
      namaDepan: "Fathiya",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241129": {
      nrp: "5025241129",
      nama: "Mochamad Ramadhan Aditya Rachman",
      namaDepan: "Ramadhan",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5053251035": {
      nrp: "5053251035",
      nama: "Azendra Kenar Arviant",
      namaDepan: "Azendra",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241046": {
      nrp: "5025241046",
      nama: "Mikail Ibrahim Hakim",
      namaDepan: "Mikail",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241234": {
      nrp: "5025241234",
      nama: "Justin Valentino",
      namaDepan: "Justin",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025251202": {
      nrp: "5025251202",
      nama: "Fawwas Razzan Sulfi Andreyawan",
      namaDepan: "Fawwas",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5053251040": {
      nrp: "5053251040",
      nama: "Muhammad Zaydan Anugrah Pratama",
      namaDepan: "Zaydan",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5054251014": {
      nrp: "5054251014",
      nama: "Muhammad Rafie Safaraz Barus",
      namaDepan: "Rafie",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5053241042": {
      nrp: "5053241042",
      nama: "Ziyad Raziq Lahitidra Afey",
      namaDepan: "Ziyad",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025231177": {
      nrp: "5025231177",
      nama: "Muhammad Baihaqi Dawanis",
      namaDepan: "Baihaqi",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241205": {
      nrp: "5025241205",
      nama: "Mirza Rifai Dhiaurrahman",
      namaDepan: "Mirza",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5054251038": {
      nrp: "5054251038",
      nama: "Jordan Sebastian Simatupang",
      namaDepan: "Jordan",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241112": {
      nrp: "5025241112",
      nama: "Dafa Kumara Sahasika",
      namaDepan: "Dafa",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241198": {
      nrp: "5025241198",
      nama: "Dwinanda Rakhish Baley",
      namaDepan: "Dwinanda",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241055": {
      nrp: "5025241055",
      nama: "Pradhipta Raja Mahendra",
      namaDepan: "Pradhipta",
      posisi: "Non-Developer (Tidak Lolos)",
    },
    "5025241045": {
      nrp: "5025241045",
      nama: "Muhammad Fathan Haiban Rafif",
      namaDepan: "Fathan",
      posisi: "Non-Developer (Tidak Lolos)",
    },
  },
};

// Daftar NRP yang memiliki overlap - tidak ada lagi overlap karena community kosong
const overlapNRPs: string[] = [];

// Function untuk mendapatkan link WhatsApp group berdasarkan posisi
export function getWhatsAppGroupLink(posisi: string): string {
  const posisiLower = posisi.toLowerCase();

  // Link untuk developer yang lolos
  if (posisiLower.includes("backend")) {
    return "https://chat.whatsapp.com/CV5gtF8rYua8NNNou4hJpS";
  }

  if (posisiLower.includes("frontend")) {
    return "https://chat.whatsapp.com/HHs4TfVJaWSDe0hnj0Gsj9";
  }

  if (posisiLower.includes("ui/ux")) {
    return "https://chat.whatsapp.com/I7jvsPoBfwwLq11Cpet9aX";
  }

  if (posisiLower.includes("mobile")) {
    return "https://chat.whatsapp.com/JY7gKk7Jv4WB1VHX8SgsBe";
  }

  if (posisiLower.includes("devops")) {
    return "https://chat.whatsapp.com/HRdrqWTGMlaBhnEdd30WiJ"; // Link umum dev
  }

  // Link untuk non-developer yang lolos
  if (posisiLower.includes("bendahara") || posisiLower.includes("sekre")) {
    return "https://chat.whatsapp.com/CKcuYbjhK7pBJYxOXmNA84";
  }

  if (posisiLower.includes("ba") || posisiLower.includes("bo")) {
    return "https://chat.whatsapp.com/DDywb4vXYzPFAVtNDC4EYr";
  }

  if (
    posisiLower.includes("production") ||
    posisiLower.includes("sms") ||
    posisiLower.includes("mr")
  ) {
    return "https://chat.whatsapp.com/F9UeP4dQSDw2DGivMzbIzL";
  }

  if (posisiLower.includes("hr")) {
    return "https://chat.whatsapp.com/HRdrqWTGMlaBhnEdd30WiJ"; // Link umum, sesuaikan jika ada link khusus HR
  }

  // Default link untuk developer umum
  return "https://chat.whatsapp.com/HRdrqWTGMlaBhnEdd30WiJ";
}

// Function untuk mendapatkan pesan selamat berdasarkan divisi dan posisi
export function getCongratulationMessage(
  divisi: string,
  posisi: string,
): string {
  const baseMessage =
    "Selamat! Kamu menjadi bagian dari keluarga Flexoo sebagai";

  if (divisi === "developer") {
    return `${baseMessage} Developer dengan role ${posisi}`;
  }

  if (divisi === "nondev_lolos") {
    return `${baseMessage} Non-Developer dengan role ${posisi}`;
  }

  if (divisi === "community") {
    return `${baseMessage} Community Member dengan role ${posisi}`;
  }

  // Default message
  return `${baseMessage} ${posisi}`;
}

// Function untuk mendapatkan role yang lebih readable
export function getReadableRole(posisi: string): string {
  const posisiMap: Record<string, string> = {
    "UI/UX Developer": "UI/UX DEVELOPER",
    "Frontend Developer": "FRONTEND DEVELOPER",
    "Backend Developer": "BACKEND DEVELOPER",
    "Mobile Developer": "MOBILE DEVELOPER",
    "DevOps Developer": "DEVOPS DEVELOPER",
    Bendahara: "BENDAHARA",
    Sekre: "SEKRETARIS",
    HR: "HUMAN RESOURCES",
    BA: "BUSINESS ANALYST",
    BO: "BUSINESS OPERATIONS",
    "MR (On Job Training)": "MARKET RESEARCH (ON JOB TRAINING)",
    "SMS (On Job Training)": "SOCIAL MEDIA SPECIALIST (ON JOB TRAINING)",
    "Production (On Job Training)": "PRODUCTION (ON JOB TRAINING)",
  };

  return posisiMap[posisi] || posisi.toUpperCase();
}

// Function untuk mendapatkan informasi lengkap untuk announcement
export function getAnnouncementInfo(developer: Developer): {
  message: string;
  whatsappLink: string;
  readableRole: string;
  isAccepted: boolean;
} {
  const isAccepted =
    developer.divisi === "developer" || developer.divisi === "nondev_lolos";
  const readableRole = getReadableRole(developer.posisi);

  if (!isAccepted) {
    return {
      message:
        "Terima kasih atas partisipasimu dalam seleksi Flexoo. Tetap semangat untuk kesempatan berikutnya!",
      whatsappLink: "",
      readableRole,
      isAccepted: false,
    };
  }

  const message = getCongratulationMessage(developer.divisi, readableRole);
  const whatsappLink = getWhatsAppGroupLink(developer.posisi);

  return {
    message,
    whatsappLink,
    readableRole,
    isAccepted: true,
  };
}

// Function untuk mencari developer berdasarkan NRP (menggunakan format baru)
export function findDeveloperByNRP(nrp: string): Developer | null {
  // Handle suffix untuk overlap (meskipun saat ini tidak ada overlap)
  let actualNrp = nrp;
  let preferredCategory: keyof DevelopersDataStructure | null = null;

  // Cek jika ada suffix -dev atau -nondev
  if (nrp.endsWith("-dev")) {
    actualNrp = nrp.replace("-dev", "");
    preferredCategory = "developer";
  } else if (nrp.endsWith("-nondev")) {
    actualNrp = nrp.replace("-nondev", "");
    // Untuk -nondev, cek apakah ada di nondev_lolos atau nondev_tidaklolos
    const nondevLolosData = developersData.nondev_lolos;
    const nondevTidakLolosData = developersData.nondev_tidaklolos;

    if (nondevLolosData[actualNrp]) {
      preferredCategory = "nondev_lolos";
    } else if (nondevTidakLolosData[actualNrp]) {
      preferredCategory = "nondev_tidaklolos";
    } else {
      preferredCategory = "nondev_lolos"; // Default
    }
  }

  // Jika ada preferensi kategori, cek kategori tersebut dulu
  if (preferredCategory) {
    const categoryData = developersData[preferredCategory];
    if (categoryData && categoryData[actualNrp]) {
      return {
        ...categoryData[actualNrp],
        divisi: preferredCategory as
          | "developer"
          | "community"
          | "nondev_lolos"
          | "nondev_tidaklolos",
      };
    }
  }

  // Untuk NRP overlap tanpa suffix, return null untuk memaksa user menggunakan suffix
  if (overlapNRPs.includes(actualNrp) && !nrp.includes("-")) {
    return null;
  }

  // Cek di semua kategori dengan prioritas untuk NRP tanpa suffix
  const categoryOrder: (keyof DevelopersDataStructure)[] = [
    "developer",
    "community",
    "nondev_lolos",
    "nondev_tidaklolos",
  ];

  for (const divisi of categoryOrder) {
    const data = developersData[divisi];
    if (data && data[actualNrp]) {
      return {
        ...data[actualNrp],
        divisi: divisi as
          | "developer"
          | "community"
          | "nondev_lolos"
          | "nondev_tidaklolos",
      };
    }
  }

  return null;
}

// Function untuk mendapatkan statistik
export function getDeveloperStatistics() {
  return {
    developer: Object.keys(developersData.developer).length,
    community: Object.keys(developersData.community).length,
    nondev_lolos: Object.keys(developersData.nondev_lolos).length,
    nondev_tidaklolos: Object.keys(developersData.nondev_tidaklolos).length,
    total:
      Object.keys(developersData.developer).length +
      Object.keys(developersData.community).length +
      Object.keys(developersData.nondev_lolos).length +
      Object.keys(developersData.nondev_tidaklolos).length,
  };
}

// Function untuk mendapatkan semua developer berdasarkan divisi
export function getDevelopersByDivision(
  divisi: "developer" | "community" | "nondev_lolos" | "nondev_tidaklolos",
): Developer[] {
  const data = developersData[divisi];
  return Object.values(data).map((dev) => ({
    ...dev,
    divisi,
  }));
}
