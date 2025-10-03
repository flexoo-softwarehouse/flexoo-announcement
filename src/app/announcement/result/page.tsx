"use client";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import ButtonLink from "@/components/links/ButtonLink";
import { Developer, findDeveloperByNRP } from "@/lib/developers";

// Daftar NRP yang memiliki overlap - sama dengan yang ada di developers.ts
const overlapNRPs = [
  "5025251100", // Yudith Hafiz Rabbani
  "5025251115", // Rayyan Aura Rahman
  "5025241234", // Justin Valentino
  "5025231177", // Muhammad Baihaqi Dawanis
  "5025241010", // Muhammad Dzaky Radithya Ryrdi
];
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Loading component
function LoadingResult() {
  return (
    <div className="mt-4 text-center">
      <Typography
        variant="h6"
        className="font-montserrat font-semibold text-blue-900"
      >
        Memuat hasil...
      </Typography>
    </div>
  );
}

// Komponen utama yang menggunakan useSearchParams
function AnnouncementContent() {
  const searchParams = useSearchParams();
  const nrp = searchParams.get("nrp");
  const result = searchParams.get("result");

  const renderResult = () => {
    if (nrp) {
      // Cek apakah ini NRP overlap tanpa suffix
      if (overlapNRPs.includes(nrp) && !nrp.includes("-")) {
        return <OverlapNRPResult nrp={nrp} />;
      }

      const developer = findDeveloperByNRP(nrp);
      if (developer) {
        if (developer.divisi === "developer") {
          return <DeveloperLolosResult developer={developer} />;
        } else if (developer.divisi === "community") {
          return <CommunityResult developer={developer} />;
        } else if (developer.divisi === "nondev_lolos") {
          return <NonDevLolosResult developer={developer} />;
        } else if (developer.divisi === "nondev_tidaklolos") {
          return <NonDevTidakLolosResult developer={developer} />;
        }
      } else {
        // NRP tidak ditemukan
        return <NRPTidakDitemukanResult />;
      }
    }

    // Fallback cases
    if (result === "community") {
      // Untuk demo, kita buat developer dummy untuk community
      const dummyDeveloper: Developer = {
        nrp: "0000000000",
        nama: "Community Member",
        namaDepan: "Community",
        posisi: "Community Member",
        divisi: "community",
      };
      return <CommunityResult developer={dummyDeveloper} />;
    }

    return <NRPTidakDitemukanResult />;
  };

  return <>{renderResult()}</>;
}

// Komponen untuk hasil diterima di Developer Utama - Lolos Interview
function DeveloperLolosResult({ developer }: { developer: Developer }) {
  return (
    <>
      <div className="mt-4">
        <Typography
          variant="h6"
          className="font-montserrat font-semibold max-lg:text-xl text-blue-900 text-center leading-4"
        >
          Hai {developer.namaDepan} 👋
        </Typography>
        <Typography
          variant="h4"
          className="font-montserrat max-lg:text-2xl font-extrabold text-blue-900 text-center leading-4"
        >
          SELAMAT KAMU LOLOS <br /> TAHAP INTERVIEW
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat mt-2 max-lg:text-xl font-semibold text-blue-900 text-center leading-4"
        >
          Silahkan Cek Jadwal Interview untuk Divisi Developer!
        </Typography>
      </div>
      <ButtonLink
        href="https://docs.google.com/spreadsheets/d/1HDkr8nDUv70LbV2IyyTc3m8qXr7KE7UR3HUci5MwUvI/edit?usp=sharing"
        variant="yellow"
        className="rounded-none mt-8 max-lg:w-full w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
      >
        Cek Jadwal Interview Dev
      </ButtonLink>
      <ButtonLink
        href="https://chat.whatsapp.com/JZBvSULF8zFFYRo6NjiQtU"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-4 w-1/2 max-lg:mt-2 text-black font-bold bg-transparent border-2 border-black hover:bg-transparent hover:text-white hover:border-white"
      >
        Yuk join grup
      </ButtonLink>
    </>
  );
}

// Komponen untuk hasil diterima di Community
function CommunityResult({ developer }: { developer: Developer }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Typography
          variant="h6"
          className="font-montserrat font-semibold max-lg:text-xl text-blue-900 text-center leading-4"
        >
          Hai {developer.namaDepan} 👋
        </Typography>
        <Typography
          variant="h4"
          className="font-montserrat max-lg:w-full max-lg:text-2xl font-extrabold text-blue-900 text-center leading-4"
        >
          SELAMAT KAMU <br /> DITERIMA DI COMMUNITY FLEXOO
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-4"
        >
          Silahkan masuk ke grup community Flexoo!
        </Typography>
      </div>
      <ButtonLink
        href="https://chat.whatsapp.com/JZBvSULF8zFFYRo6NjiQtU"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-8 w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
      >
        Yuk join grup
      </ButtonLink>
    </>
  );
}

// Komponen untuk hasil Non-Developer yang Lolos
function NonDevLolosResult({ developer }: { developer: Developer }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Typography
          variant="h6"
          className="font-montserrat font-semibold max-lg:text-xl text-blue-900 text-center leading-4"
        >
          Hai {developer.namaDepan} 👋
        </Typography>
        <Typography
          variant="h4"
          className="font-montserrat max-lg:w-full max-lg:text-2xl font-extrabold text-blue-900 text-center leading-4"
        >
          SELAMAT KAMU LOLOS <br /> TAHAP INTERVIEW
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-4"
        >
          Silahkan Cek Jadwal Interview untuk Divisi Non-Developer!
        </Typography>
      </div>
      <ButtonLink
        href="https://docs.google.com/spreadsheets/d/13S1foWA6PaKL8DHBmYz31l8zpHppya_djaFsboz7kJY/edit?usp=sharing"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-8 w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
      >
        Cek Jadwal Interview Non-Dev
      </ButtonLink>
    </>
  );
}

// Komponen untuk hasil Non-Developer yang Tidak Lolos
function NonDevTidakLolosResult({ developer }: { developer: Developer }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Typography
          variant="h6"
          className="font-montserrat font-semibold max-lg:text-xl text-blue-900 text-center leading-4"
        >
          Hai {developer.namaDepan} 👋
        </Typography>
        <Typography
          variant="h4"
          className="font-montserrat max-lg:w-full max-lg:text-2xl font-extrabold text-blue-900 text-center leading-4"
        >
          MAAF KAMU BELUM <br /> LOLOS KALI INI
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-4"
        >
          Tetap Semangat! Masih ada kesempatan lain di masa menunggumu.
        </Typography>
      </div>
    </>
  );
}

// Komponen untuk NRP yang overlap - perlu suffix
function OverlapNRPResult({ nrp }: { nrp: string }) {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center max-lg:px-4">
        <Typography
          variant="h4"
          className="font-montserrat font-extrabold max-lg:text-2xl text-blue-900 text-center leading-6"
        >
          NRP MEMILIKI MULTIPLE HASIL
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-4 font-semibold text-blue-900 text-center leading-5"
        >
          Silahkan tambahkan suffix untuk melihat hasil:
        </Typography>
        <div className="mt-4 space-y-2 text-center">
          <Typography variant="p" className="font-montserrat text-blue-900">
            • Untuk hasil Developer: <strong>{nrp}-dev</strong>
          </Typography>
          <Typography variant="p" className="font-montserrat text-blue-900">
            • Untuk hasil Non-Developer: <strong>{nrp}-nondev</strong>
          </Typography>
        </div>
      </div>
    </>
  );
}

// Komponen untuk NRP tidak ditemukan
function NRPTidakDitemukanResult() {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center max-lg:px-4">
        <Typography
          variant="h4"
          className="font-montserrat font-extrabold max-lg:text-2xl text-blue-900 text-center leading-6"
        >
          NRP TIDAK DITEMUKAN
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat mt-2 font-semibold text-blue-900 text-center leading-4"
        >
          Mohon periksa kembali NRP yang Anda masukkan
        </Typography>
      </div>
    </>
  );
}

export default function Announcement() {
  return (
    <main className="w-screen max-lg:px-4 relative overflow-hidden flex flex-col justify-center items-center h-screen bg-[url('/images/background-announcement.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col justify-center items-center ">
        <NextImage
          src="/logo-flexoo.svg"
          alt="Flexoo Logo"
          width={100}
          height={50}
        />
        <Typography
          variant="h5"
          className="font-montserrat font-extrabold text-blue-900 max-lg:text-3xl"
        >
          FLEXOO 2025
        </Typography>
      </div>

      <Suspense fallback={<LoadingResult />}>
        <AnnouncementContent />
      </Suspense>

      <NextImage
        src="/logo-flexoo.svg"
        alt="Flexoo Logo"
        width={500}
        height={400}
        className="absolute bottom-0 right-0 translate-x-40 translate-y-48 max-lg:scale-50"
      />
    </main>
  );
}
