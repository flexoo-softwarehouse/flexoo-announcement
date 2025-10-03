// Data developer yang diterima (terenkripsi)
export interface Developer {
  nrp: string;
  nama: string;
  namaDepan: string;
  posisi: string;
  divisi: "developer" | "community" | "nondev_lolos" | "nondev_tidaklolos";
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

// Struktur data yang baru dengan format yang diminta
const developersData = {
  developer: {
    "5025241233": {
      nrp: "5025241233",
      nama: "Rifat Qurratu Aini Irwandi",
      namaDepan: "Rifat",
      posisi: "Developer",
    },
    "5025241010": {
      nrp: "5025241010",
      nama: "Muhammad Dzaky Radithya Ryrdi",
      namaDepan: "Dzaky",
      posisi: "Developer",
    },
    "5025231053": {
      nrp: "5025231053",
      nama: "Mohammad Farhan Nazrul Ilhami",
      namaDepan: "Farhan",
      posisi: "Developer",
    },
    "5054251047": {
      nrp: "5054251047",
      nama: "A. Toriq Azhar",
      namaDepan: "Toriq",
      posisi: "Developer",
    },
    "5025241028": {
      nrp: "5025241028",
      nama: "Himawan Rakha Bhadra",
      namaDepan: "Himawan",
      posisi: "Developer",
    },
    "5053241050": {
      nrp: "5053241050",
      nama: "Ararya Arka Anugraha",
      namaDepan: "Ararya",
      posisi: "Developer",
    },
    "5054241019": {
      nrp: "5054241019",
      nama: "Ferri Adi Prasetya",
      namaDepan: "Ferri",
      posisi: "Developer",
    },
    "5054241007": {
      nrp: "5054241007",
      nama: "Muhamad Fatih Al Fawwaz",
      namaDepan: "Fatih",
      posisi: "Developer",
    },
    "5053231008": {
      nrp: "5053231008",
      nama: "Nur Muhammad Faiz",
      namaDepan: "Faiz",
      posisi: "Developer",
    },
    "5025231168": {
      nrp: "5025231168",
      nama: "Kevin Andreas",
      namaDepan: "Kevin",
      posisi: "Developer",
    },
    "5025241218": {
      nrp: "5025241218",
      nama: "Ida Bagus Gde Dimas Sutha Maha",
      namaDepan: "Dimas",
      posisi: "Developer",
    },
    "5025231216": {
      nrp: "5025231216",
      nama: "Huraira Shenmue Mahanee",
      namaDepan: "Huraira",
      posisi: "Developer",
    },
    "5025231091": {
      nrp: "5025231091",
      nama: "Fernando",
      namaDepan: "Fernando",
      posisi: "Developer",
    },
    "5053251021": {
      nrp: "5053251021",
      nama: "Ahmad Zaidaan",
      namaDepan: "Ahmad",
      posisi: "Developer",
    },
    "5025251129": {
      nrp: "5025251129",
      nama: "Muhammad Brahmana Priambudi",
      namaDepan: "Brahmana",
      posisi: "Developer",
    },
    "5025231115": {
      nrp: "5025231115",
      nama: "Arkananta Masarief",
      namaDepan: "Arkananta",
      posisi: "Developer",
    },
    "5025241142": {
      nrp: "5025241142",
      nama: "Ananda Aryasatya Zhafran Aqila",
      namaDepan: "Ananda",
      posisi: "Developer",
    },
    "5025231139": {
      nrp: "5025231139",
      nama: "Hamasah Fatiy Dakhilullah",
      namaDepan: "Hamasah",
      posisi: "Developer",
    },
    "5053251017": {
      nrp: "5053251017",
      nama: "Daffa Randika",
      namaDepan: "Daffa",
      posisi: "Developer",
    },
    "5053251041": {
      nrp: "5053251041",
      nama: "Moch Siril Wafa Zidane Feliano",
      namaDepan: "Siril",
      posisi: "Developer",
    },
  },

  community: {
    "5025251053": {
      nrp: "5025251053",
      nama: "M. Haziq Ridwan Parsa",
      namaDepan: "Haziq",
      posisi: "Community Member",
    },
    "5025251118": {
      nrp: "5025251118",
      nama: "Anang Ardhiansyah",
      namaDepan: "Anang",
      posisi: "Community Member",
    },
    "5025251137": {
      nrp: "5025251137",
      nama: "Rayyan Aqsha Raditya",
      namaDepan: "Rayyan",
      posisi: "Community Member",
    },
    "5054251036": {
      nrp: "5054251036",
      nama: "Prima Surya Nusantara",
      namaDepan: "Prima",
      posisi: "Community Member",
    },
    "5025251086": {
      nrp: "5025251086",
      nama: "Muhammad Fawwas Al Haqqy Agung Putra",
      namaDepan: "Fawwas",
      posisi: "Community Member",
    },
    "5025241051": {
      nrp: "5025241051",
      nama: "Reza Afzaal Faizullah Taqy",
      namaDepan: "Reza",
      posisi: "Community Member",
    },
    "5025231174": {
      nrp: "5025231174",
      nama: "Faiz Adli Nugraha",
      namaDepan: "Faiz",
      posisi: "Community Member",
    },
    "5025251020": {
      nrp: "5025251020",
      nama: "Firsto Al Kautsar Jagad Kurniaji",
      namaDepan: "Firsto",
      posisi: "Community Member",
    },
    "5025241023": {
      nrp: "5025241023",
      nama: "Hamzah Ali Abdillah",
      namaDepan: "Hamzah",
      posisi: "Community Member",
    },
    "5025241171": {
      nrp: "5025241171",
      nama: "Muhammad Sholihuddin Rizky",
      namaDepan: "Sholih",
      posisi: "Community Member",
    },
    "5053251026": {
      nrp: "5053251026",
      nama: "Safia Rashida Raya",
      namaDepan: "Safia",
      posisi: "Community Member",
    },
    "5025231177": {
      nrp: "5025231177",
      nama: "Muhammad Baihaqi Dawanis",
      namaDepan: "Baihaqi",
      posisi: "Community Member",
    },
    "5025231257": {
      nrp: "5025231257",
      nama: "Juang Maulana Taruna Putra",
      namaDepan: "Juang",
      posisi: "Community Member",
    },
    "5053231014": {
      nrp: "5053231014",
      nama: "Geraldo Benjamin Nainggolan",
      namaDepan: "Geraldo",
      posisi: "Community Member",
    },
    "5025251100": {
      nrp: "5025251100",
      nama: "Yudith Hafiz Rabbani",
      namaDepan: "Yudith",
      posisi: "Community Member",
    },
    "5025241160": {
      nrp: "5025241160",
      nama: "Hartmann Kanisius Galla' Massang",
      namaDepan: "Hartmann",
      posisi: "Community Member",
    },
    "5025251102": {
      nrp: "5025251102",
      nama: "Muhammad Ludaka Firdaus",
      namaDepan: "Ludaka",
      posisi: "Community Member",
    },
    "5053251007": {
      nrp: "5053251007",
      nama: "Abdul Ghofur Luqman Salim",
      namaDepan: "Ghofur",
      posisi: "Community Member",
    },
    "5025241156": {
      nrp: "5025241156",
      nama: "Frenaldy Bestabba Hasugian",
      namaDepan: "Frenaldy",
      posisi: "Community Member",
    },
    "5025241148": {
      nrp: "5025241148",
      nama: "Muhammad Zaky Zein",
      namaDepan: "Zaky",
      posisi: "Community Member",
    },
    "5053241031": {
      nrp: "5053241031",
      nama: "Jovan Oberto Mishael Sinaga",
      namaDepan: "Jovan",
      posisi: "Community Member",
    },
    "5025251024": {
      nrp: "5025251024",
      nama: "Rinaltra Nabasa S",
      namaDepan: "Rinaltra",
      posisi: "Community Member",
    },
    "5025251245": {
      nrp: "5025251245",
      nama: "Hasna Nabila Hanim",
      namaDepan: "Hasna",
      posisi: "Community Member",
    },
    "5053231001": {
      nrp: "5053231001",
      nama: "Made Satya Dhananjaya",
      namaDepan: "Satya",
      posisi: "Community Member",
    },
    "5025241094": {
      nrp: "5025241094",
      nama: "Fayza Lathifah Humam",
      namaDepan: "Fayza",
      posisi: "Community Member",
    },
    "5025251120": {
      nrp: "5025251120",
      nama: "Alogo Hasiholan Napitupulu",
      namaDepan: "Alogo",
      posisi: "Community Member",
    },
    "5025251178": {
      nrp: "5025251178",
      nama: "Fazli Irham Ramadhan Abdillah",
      namaDepan: "Fazli",
      posisi: "Community Member",
    },
    "5025251115": {
      nrp: "5025251115",
      nama: "Rayyan Aura Rahman",
      namaDepan: "Rayyan",
      posisi: "Community Member",
    },
    "5054251039": {
      nrp: "5054251039",
      nama: "Muhammad Dzaky Haidar",
      namaDepan: "Dzaky",
      posisi: "Community Member",
    },
    "5025251230": {
      nrp: "5025251230",
      nama: "Naila Hikaru",
      namaDepan: "Naila",
      posisi: "Community Member",
    },
    "5025251243": {
      nrp: "5025251243",
      nama: "Irsyad Akbar",
      namaDepan: "Irsyad",
      posisi: "Community Member",
    },
    "5025251191": {
      nrp: "5025251191",
      nama: "Salsabila Hana Adniah",
      namaDepan: "Salsabila",
      posisi: "Community Member",
    },
    "5025251062": {
      nrp: "5025251062",
      nama: "Aisyah Putri Diza",
      namaDepan: "Aisyah",
      posisi: "Community Member",
    },
    "5025251200": {
      nrp: "5025251200",
      nama: "Rafi Eka Pramudya",
      namaDepan: "Rafi",
      posisi: "Community Member",
    },
    "5025241065": {
      nrp: "5025241065",
      nama: "Aji Zaenul Musthofa",
      namaDepan: "Aji",
      posisi: "Community Member",
    },
    "5054251001": {
      nrp: "5054251001",
      nama: "Benedictus Ryu Gunawan",
      namaDepan: "Ryu",
      posisi: "Community Member",
    },
    "5025251031": {
      nrp: "5025251031",
      nama: "Najwan Sigit Cahya Buana",
      namaDepan: "Najwan",
      posisi: "Community Member",
    },
    "5025251196": {
      nrp: "5025251196",
      nama: "I Dewa Gede Putra Susila",
      namaDepan: "Putra",
      posisi: "Community Member",
    },
    "5025251036": {
      nrp: "5025251036",
      nama: "Darwisy Ahmad Alfayyadl",
      namaDepan: "Darwisy",
      posisi: "Community Member",
    },
    "5025231018": {
      nrp: "5025231018",
      nama: "Cathleen Gracia",
      namaDepan: "Cathleen",
      posisi: "Community Member",
    },
    "5054251005": {
      nrp: "5054251005",
      nama: "Muhamad Nafi' Mulyo",
      namaDepan: "Nafi",
      posisi: "Community Member",
    },
    "5025251195": {
      nrp: "5025251195",
      nama: "Dafa Dega Wijaya",
      namaDepan: "Dafa",
      posisi: "Community Member",
    },
    "5025251154": {
      nrp: "5025251154",
      nama: "Boy Steven Benaya Aritonang",
      namaDepan: "Boy",
      posisi: "Community Member",
    },
    "5025241058": {
      nrp: "5025241058",
      nama: "Addien Zafriyan Al Akhsan",
      namaDepan: "Addien",
      posisi: "Community Member",
    },
    "5025241104": {
      nrp: "5025241104",
      nama: "Raden Kurniawan Agung Fitrianto",
      namaDepan: "Raden",
      posisi: "Community Member",
    },
    "5054251024": {
      nrp: "5054251024",
      nama: "Muhammad Irzam Hafis Fabiansyah",
      namaDepan: "Irzam",
      posisi: "Community Member",
    },
    "5025241137": {
      nrp: "5025241137",
      nama: "Afarrel Febryan Ghiffari Putra Andy",
      namaDepan: "Afarrel",
      posisi: "Community Member",
    },
    "5025241134": {
      nrp: "5025241134",
      nama: "Gilbran Mahdavikia Raja",
      namaDepan: "Gilbran",
      posisi: "Community Member",
    },
    "5025241127": {
      nrp: "5025241127",
      nama: "Mochammad Irfan Sandy",
      namaDepan: "Irfan",
      posisi: "Community Member",
    },
    "5053241030": {
      nrp: "5053241030",
      nama: "Muhammad Khalid Ash Shiddiqi",
      namaDepan: "Khalid",
      posisi: "Community Member",
    },
    "5025251246": {
      nrp: "5025251246",
      nama: "Hamizan Rifqi Afandi",
      namaDepan: "Hamizan",
      posisi: "Community Member",
    },
    "5053251020": {
      nrp: "5053251020",
      nama: "Yuwand Arteta Hydri Wahyu Putra",
      namaDepan: "Yuwand",
      posisi: "Community Member",
    },
    "5025241132": {
      nrp: "5025241132",
      nama: "Jeihan Shawmy Prasetya",
      namaDepan: "Jeihan",
      posisi: "Community Member",
    },
    "5025241234": {
      nrp: "5025241234",
      nama: "Justin Valentino",
      namaDepan: "Justin",
      posisi: "Community Member",
    },
    "5053241016": {
      nrp: "5053241016",
      nama: "Alhaura Rahmatunnisa Harsanto",
      namaDepan: "Alhaura",
      posisi: "Community Member",
    },
    "5025241204": {
      nrp: "5025241204",
      nama: "Fathiya Nayla Husna Wibowo",
      namaDepan: "Fathiya",
      posisi: "Community Member",
    },
    "5025251153": {
      nrp: "5025251153",
      nama: "I Gede Made Adi Putra Adnyana",
      namaDepan: "Adi",
      posisi: "Community Member",
    },
    "5025241120": {
      nrp: "5025241120",
      nama: "Raditya Zhafran Pranuja",
      namaDepan: "Raditya",
      posisi: "Community Member",
    },
    "5025241036": {
      nrp: "5025241036",
      nama: "Muhammad Quthbi Danish Abqori",
      namaDepan: "Quthbi",
      posisi: "Community Member",
    },
    "5025241029": {
      nrp: "5025241029",
      nama: "Berwyn Rafif Alvaro",
      namaDepan: "Berwyn",
      posisi: "Community Member",
    },
    "5053251030": {
      nrp: "5053251030",
      nama: "La Ode Muhammad Ghofaruddin S",
      namaDepan: "Ghofaruddin",
      posisi: "Community Member",
    },
    "5025251184": {
      nrp: "5025251184",
      nama: "Claresta Amelinda Hutauruk",
      namaDepan: "Claresta",
      posisi: "Community Member",
    },
    "5053251025": {
      nrp: "5053251025",
      nama: "Muhammad Fakhry Ziyad Dhiyaulhaq",
      namaDepan: "Fakhry",
      posisi: "Community Member",
    },
    "5025241004": {
      nrp: "5025241004",
      nama: "Razan Widya Reswara",
      namaDepan: "Razan",
      posisi: "Community Member",
    },
    "5025251124": {
      nrp: "5025251124",
      nama: "Muhammad Alhady Rizq",
      namaDepan: "Alhady",
      posisi: "Community Member",
    },
    "5025251130": {
      nrp: "5025251130",
      nama: "Aziz Alfarisi",
      namaDepan: "Aziz",
      posisi: "Community Member",
    },
    "5053251004": {
      nrp: "5053251004",
      nama: "M. Khauzaky Amkanaky",
      namaDepan: "Khauzaky",
      posisi: "Community Member",
    },
    "5054251026": {
      nrp: "5054251026",
      nama: "Jonathan Joyo Wibowo",
      namaDepan: "Jonathan",
      posisi: "Community Member",
    },
    "5025251174": {
      nrp: "5025251174",
      nama: "Marco Marcelino",
      namaDepan: "Marco",
      posisi: "Community Member",
    },
    "5025251249": {
      nrp: "5025251249",
      nama: "Enver Alif Wirawan",
      namaDepan: "Enver",
      posisi: "Community Member",
    },
    "5025241163": {
      nrp: "5025241163",
      nama: "Maulana Ikhsan",
      namaDepan: "Maulana",
      posisi: "Community Member",
    },
    "5025241090": {
      nrp: "5025241090",
      nama: "Willy Dava Nugraha",
      namaDepan: "Willy",
      posisi: "Community Member",
    },
  },

  nondev_lolos: {
    "5025251045": {
      nrp: "5025251045",
      nama: "Khalisya Zahra Putria Rahman",
      namaDepan: "Khalisya",
      posisi: "Non-Developer",
    },
    "5025231129": {
      nrp: "5025231129",
      nama: "Akmal Bobsaid",
      namaDepan: "Akmal",
      posisi: "Non-Developer",
    },
    "5025241046": {
      nrp: "5025241046",
      nama: "Mikail Ibrahim Hakim",
      namaDepan: "Mikail",
      posisi: "Non-Developer",
    },
    "5025241129": {
      nrp: "5025241129",
      nama: "Mochamad Ramadhan Aditya Rachman",
      namaDepan: "Ramadhan",
      posisi: "Non-Developer",
    },
    "5025241045": {
      nrp: "5025241045",
      nama: "Muhammad Fathan Haiban Rafif",
      namaDepan: "Fathan",
      posisi: "Non-Developer",
    },
    "5025241235": {
      nrp: "5025241235",
      nama: "Shafira Nauraishma Zahida",
      namaDepan: "Shafira",
      posisi: "Non-Developer",
    },
    "5025251202": {
      nrp: "5025251202",
      nama: "Fawwas Razzan Sulfi Andreyawan",
      namaDepan: "Fawwas",
      posisi: "Non-Developer",
    },
    "5054251038": {
      nrp: "5054251038",
      nama: "Jordan Sebastian Simatupang",
      namaDepan: "Jordan",
      posisi: "Non-Developer",
    },
    "5053251040": {
      nrp: "5053251040",
      nama: "Muhammad Zaydan Anugrah Pratama",
      namaDepan: "Zaydan",
      posisi: "Non-Developer",
    },
    "5025231252": {
      nrp: "5025231252",
      nama: "Rafael Jonathan Raja Nicholas Harianja",
      namaDepan: "Rafael",
      posisi: "Non-Developer",
    },
    "5054251014": {
      nrp: "5054251014",
      nama: "Muhammad Rafie Safaraz Barus",
      namaDepan: "Rafie",
      posisi: "Non-Developer",
    },
    "5053241042": {
      nrp: "5053241042",
      nama: "Ziyad Raziq Lahitidra Afey",
      namaDepan: "Ziyad",
      posisi: "Non-Developer",
    },
    "5025241055": {
      nrp: "5025241055",
      nama: "Pradhipta Raja Mahendra",
      namaDepan: "Pradhipta",
      posisi: "Non-Developer",
    },
    "5025241234": {
      nrp: "5025241234",
      nama: "Justin Valentino",
      namaDepan: "Justin",
      posisi: "Non-Developer",
    },
    "5053251035": {
      nrp: "5053251035",
      nama: "Azendra Kenar Arviant",
      namaDepan: "Azendra",
      posisi: "Non-Developer",
    },
    "5025251135": {
      nrp: "5025251135",
      nama: "Gadhiza Edgina Ikhwana Putri",
      namaDepan: "Gadhiza",
      posisi: "Non-Developer",
    },
    "5025241037": {
      nrp: "5025241037",
      nama: "Agil Lukman Hakim Muchdi",
      namaDepan: "Agil",
      posisi: "Non-Developer",
    },
    "5054251042": {
      nrp: "5054251042",
      nama: "Muhammad Farid Wijdan",
      namaDepan: "Farid",
      posisi: "Non-Developer",
    },
    "5025241205": {
      nrp: "5025241205",
      nama: "Mirza Rifai Dhiaurrahman",
      namaDepan: "Mirza",
      posisi: "Non-Developer",
    },
    "5025241198": {
      nrp: "5025241198",
      nama: "Dwinanda Rakhish Baley",
      namaDepan: "Dwinanda",
      posisi: "Non-Developer",
    },
    "5054241002": {
      nrp: "5054241002",
      nama: "Tuti Purwaningsih",
      namaDepan: "Tuti",
      posisi: "Non-Developer",
    },
    "5025241022": {
      nrp: "5025241022",
      nama: "Safa Mashita",
      namaDepan: "Safa",
      posisi: "Non-Developer",
    },
    "5025251176": {
      nrp: "5025251176",
      nama: "Kevinansyah Salviano Rachmadewa",
      namaDepan: "Kevinansyah",
      posisi: "Non-Developer",
    },
    "5025241110": {
      nrp: "5025241110",
      nama: "Severinus Fabian Tanuwidjaja",
      namaDepan: "Fabian",
      posisi: "Non-Developer",
    },
    "5053241047": {
      nrp: "5053241047",
      nama: "Fathiya Haya Shafa Kamila Setiadi",
      namaDepan: "Fathiya",
      posisi: "Non-Developer",
    },
    "5053251014": {
      nrp: "5053251014",
      nama: "Muhammad Rafi Riansjah",
      namaDepan: "Rafi",
      posisi: "Non-Developer",
    },
    "5025241069": {
      nrp: "5025241069",
      nama: "Erica Triana Widyastuti",
      namaDepan: "Erica",
      posisi: "Non-Developer",
    },
    "5025241112": {
      nrp: "5025241112",
      nama: "Dafa Kumara Sahasika",
      namaDepan: "Dafa",
      posisi: "Non-Developer",
    },
    "5025251100": {
      nrp: "5025251100",
      nama: "Yudith Hafiz Rabbani",
      namaDepan: "Yudith",
      posisi: "Non-Developer",
    },
    "5025231177": {
      nrp: "5025231177",
      nama: "Muhammad Baihaqi Dawanis",
      namaDepan: "Baihaqi",
      posisi: "Non-Developer",
    },
    "5025241010": {
      nrp: "5025241010",
      nama: "Muhammad Dzaky Radithya Ryrdi",
      namaDepan: "Dzaky",
      posisi: "Non-Developer",
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
      nrp: "5025231053",
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
  },
};

// Daftar NRP yang memiliki overlap - perlu suffix untuk membedakan
const overlapNRPs = [
  "5025251100", // Yudith Hafiz Rabbani (community + nondev_lolos)
  "5025251115", // Rayyan Aura Rahman (community + nondev_tidaklolos)
  "5025241234", // Justin Valentino (community + nondev_lolos)
  "5025231177", // Muhammad Baihaqi Dawanis (community + nondev_lolos)
  "5025241010", // Muhammad Dzaky Radithya Ryrdi (developer + nondev_lolos)
];

// Function untuk mencari developer berdasarkan NRP (menggunakan format baru)
export function findDeveloperByNRP(nrp: string): Developer | null {
  // Handle suffix untuk overlap
  let actualNrp = nrp;
  let preferredCategory: string | null = null;

  // Cek jika ada suffix -dev atau -nondev
  if (nrp.endsWith("-dev")) {
    actualNrp = nrp.replace("-dev", "");
    preferredCategory = "developer";
  } else if (nrp.endsWith("-nondev")) {
    actualNrp = nrp.replace("-nondev", "");
    // Untuk -nondev, cek apakah ada di nondev_lolos atau nondev_tidaklolos
    const nondevLolosData = developersData.nondev_lolos as Record<
      string,
      { nrp: string; nama: string; namaDepan: string; posisi: string }
    >;
    const nondevTidakLolosData = developersData.nondev_tidaklolos as Record<
      string,
      { nrp: string; nama: string; namaDepan: string; posisi: string }
    >;

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
    const categoryData =
      developersData[preferredCategory as keyof typeof developersData];
    if (categoryData) {
      const typedData = categoryData as Record<
        string,
        { nrp: string; nama: string; namaDepan: string; posisi: string }
      >;
      if (typedData[actualNrp]) {
        return {
          ...typedData[actualNrp],
          divisi: preferredCategory as
            | "developer"
            | "community"
            | "nondev_lolos"
            | "nondev_tidaklolos",
        };
      }
    }
  }

  // Untuk NRP overlap tanpa suffix, return null untuk memaksa user menggunakan suffix
  if (overlapNRPs.includes(actualNrp) && !nrp.includes("-")) {
    return null;
  }

  // Cek di semua kategori dengan prioritas untuk NRP tanpa suffix
  const categoryOrder = [
    "developer",
    "community",
    "nondev_lolos",
    "nondev_tidaklolos",
  ];

  for (const divisi of categoryOrder) {
    const data = developersData[divisi as keyof typeof developersData];
    const typedData = data as Record<
      string,
      { nrp: string; nama: string; namaDepan: string; posisi: string }
    >;
    if (typedData[actualNrp]) {
      return {
        ...typedData[actualNrp],
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
