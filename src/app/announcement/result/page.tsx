"use client";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import ButtonLink from "@/components/links/ButtonLink";
import { Developer, findDeveloperByNRP } from "@/lib/developers";
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
      const developer = findDeveloperByNRP(nrp);
      if (developer) {
        if (developer.divisi === "developer") {
          return <DeveloperUtamaResult developer={developer} />;
        } else if (developer.divisi === "community") {
          return <CommunityResult developer={developer} />;
        }
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

    return <NoResultFound />;
  };

  return <>{renderResult()}</>;
}

// Komponen untuk hasil diterima di Developer Utama
function DeveloperUtamaResult({ developer }: { developer: Developer }) {
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
          SELAMAT KAMU DITERIMA <br /> DI DEVELOPER UTAMA
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-2 max-lg:text-xl font-semibold text-blue-900 text-center leading-4"
        >
          Sebagai{" "}
          <span className="font-extrabold underline">{developer.posisi}</span>
        </Typography>
      </div>
      <ButtonLink
        href="https://chat.whatsapp.com/HRdrqWTGMlaBhnEdd30WiJ"
        variant="yellow"
        className="rounded-none mt-8 max-lg:w-full w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
      >
        Yuk Join Grup Developer Utama
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
          MAAF KAMU BELUM <br /> DITERIMA DI DEVELOPER UTAMA
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-4"
        >
          Tenang masih ada kesempatan untuk masuk Developer Utama melalui magang{" "}
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

// Komponen untuk hasil tidak diterima/tidak ada
function NoResultFound() {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center max-lg:px-4">
        <Typography
          variant="h4"
          className="font-montserrat font-extrabold max-lg:text-4xl text-blue-900 text-center leading-4"
        >
          HASIL KAMU TIDAK DITEMUKAN
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat w-3/4 max-lg:w-full max-lg:mt-2 font-semibold text-blue-900 text-center leading-4 mt-4"
        >
          Jika kamu tidak mendaftar silahkan ikut Open Recruitment New Gen
          Flexoo pada tanggal 27 - 30 September 2025
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
