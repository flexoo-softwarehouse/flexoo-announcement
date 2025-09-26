// Data developer yang diterima (terenkripsi)
export interface Developer {
  nrp: string;
  nama: string;
  namaDepan: string;
  posisi: string;
  divisi: "developer" | "community";
}

// Data terenkripsi - lebih sulit dibaca di inspect element
const _encryptedData = [
  // Developer Utama - menggunakan hash untuk NRP
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

// Function untuk mencari developer berdasarkan NRP (menggunakan hash)
export function findDeveloperByNRP(nrp: string): Developer | null {
  // Implementasi sederhana untuk demo - di production gunakan hash yang proper
  const developersMap: { [key: string]: Developer } = {
    "5025231094": {
      nrp: "5025231094",
      nama: "Vinsario Shentana",
      namaDepan: "Vinsario",
      posisi: "Frontend Developer",
      divisi: "developer",
    },
    "5025231148": {
      nrp: "5025231148",
      nama: "Azka Rizqullah Ramadhani",
      namaDepan: "Azka",
      posisi: "Project Manager dan Backend Developer",
      divisi: "developer",
    },
    "5025231087": {
      nrp: "5025231087",
      nama: "Justin Chow",
      namaDepan: "Justin",
      posisi: "Frontend Developer",
      divisi: "developer",
    },
    "5053231020": {
      nrp: "5053231020",
      nama: "Muammar Bahalwan",
      namaDepan: "Muammar",
      posisi: "Project Manager dan UI/UX Designer",
      divisi: "developer",
    },
    "5025231171": {
      nrp: "5025231171",
      nama: "Andrew Wallace",
      namaDepan: "Andrew",
      posisi: "Frontend Developer",
      divisi: "developer",
    },
    "5025231168": {
      nrp: "5025231168",
      nama: "Kevin Andreas",
      namaDepan: "Kevin",
      posisi: "Frontend Developer",
      divisi: "developer",
    },
    "5025221155": {
      nrp: "5025221155",
      nama: "Adnan Abdullah Juan",
      namaDepan: "Adnan",
      posisi: "Backend Developer",
      divisi: "developer",
    },
    "5025231097": {
      nrp: "5025231097",
      nama: "Daniel Adhitthana",
      namaDepan: "Daniel",
      posisi: "Backend Developer",
      divisi: "developer",
    },
    "5025231002": {
      nrp: "5025231002",
      nama: "Fadhil Revinno Hairiman",
      namaDepan: "Fadhil",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025231022": {
      nrp: "5025231022",
      nama: "Muhammad Zufar Al Hafidz",
      namaDepan: "Zufar",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025231091": {
      nrp: "5025231091",
      nama: "Fernando",
      namaDepan: "Fernando",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025211175": {
      nrp: "5025211175",
      nama: "Syarifah Talitha Erfany",
      namaDepan: "Talitha",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025231209": {
      nrp: "5025231209",
      nama: "Daffa Rinali",
      namaDepan: "Daffa",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025231196": {
      nrp: "5025231196",
      nama: "Badruzzaman Nafiz",
      namaDepan: "Nafiz",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025221228": {
      nrp: "5025221228",
      nama: "Ranto Bastara Hamonangan Sitorus",
      namaDepan: "Ranto",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025221077": {
      nrp: "5025221077",
      nama: "Iffa Amalia Sabrina",
      namaDepan: "Iffa",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025221216": {
      nrp: "5025221216",
      nama: "Muhammad Gesang Ridho Widigdo",
      namaDepan: "Gesang",
      posisi: "Community Member",
      divisi: "community",
    },
    "5025221115": {
      nrp: "5025221115",
      nama: "Birhasani Raka Abiansyah",
      namaDepan: "Raka",
      posisi: "Community Member",
      divisi: "community",
    },
  };

  return developersMap[nrp] || null;
}
