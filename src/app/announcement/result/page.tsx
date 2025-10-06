"use client";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import ButtonLink from "@/components/links/ButtonLink";
import {
  Developer,
  findDeveloperByNRP,
  getAnnouncementInfo,
} from "@/lib/developers";

// Daftar NRP yang memiliki overlap - semua yang ada di multiple kategori
const overlapNRPs: string[] = [
  "5025241010", // Dzaky - ada di developer dan nondev_lolos
  // Tambahkan NRP lain yang overlap jika ada
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
        const announcementInfo = getAnnouncementInfo(developer);

        if (announcementInfo.isAccepted) {
          if (developer.divisi === "developer") {
            return (
              <DeveloperLolosResult
                developer={developer}
                announcementInfo={announcementInfo}
              />
            );
          } else if (developer.divisi === "nondev_lolos") {
            return (
              <NonDevLolosResult
                developer={developer}
                announcementInfo={announcementInfo}
              />
            );
          } else if (developer.divisi === "community") {
            return (
              <CommunityResult
                developer={developer}
                announcementInfo={announcementInfo}
              />
            );
          }
        } else {
          return (
            <TidakLolosResult
              developer={developer}
              announcementInfo={announcementInfo}
            />
          );
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
      const announcementInfo = getAnnouncementInfo(dummyDeveloper);
      return (
        <CommunityResult
          developer={dummyDeveloper}
          announcementInfo={announcementInfo}
        />
      );
    }

    return <NRPTidakDitemukanResult />;
  };

  return <>{renderResult()}</>;
}

// Komponen untuk hasil diterima di Developer - Final Result
function DeveloperLolosResult({
  developer,
  announcementInfo,
}: {
  developer: Developer;
  announcementInfo: ReturnType<typeof getAnnouncementInfo>;
}) {
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
          className="font-montserrat max-lg:text-2xl font-bold text-blue-900 text-center leading-4"
        >
          SELAMAT KAMU DITERIMA!
        </Typography>
        <Typography
          variant="h4"
          className="font-montserrat max-lg:text-2xl font-bold text-blue-900 text-center leading-4"
        >
          SEBAGAI{" "}
          <span className="font-extrabold underline">
            {announcementInfo.readableRole}!
          </span>
        </Typography>
      </div>

      {/* Button untuk grup spesifik berdasarkan posisi */}
      {announcementInfo.whatsappLink && (
        <ButtonLink
          href={announcementInfo.whatsappLink}
          variant="yellow"
          className="rounded-none mt-8 max-lg:w-full w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
        >
          Join Grup Divisi!
        </ButtonLink>
      )}

      {/* Button untuk grup developer umum */}
      <ButtonLink
        href="https://chat.whatsapp.com/HRdrqWTGMlaBhnEdd30WiJ"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-4 w-1/2 max-lg:mt-2 text-black font-bold bg-transparent border-2 border-black hover:bg-transparent hover:text-white hover:border-white"
      >
        Yuk join grup Developer!
      </ButtonLink>
    </>
  );
}

// Komponen untuk hasil diterima di Community
function CommunityResult({
  developer,
  announcementInfo,
}: {
  developer: Developer;
  announcementInfo: ReturnType<typeof getAnnouncementInfo>;
}) {
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
          SELAMAT!
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-5"
        >
          {announcementInfo.message}
        </Typography>
      </div>

      {announcementInfo.whatsappLink && (
        <ButtonLink
          href={announcementInfo.whatsappLink}
          variant="yellow"
          className="rounded-none max-lg:w-full mt-8 w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
        >
          Yuk join grup Community
        </ButtonLink>
      )}

      <ButtonLink
        href="/"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-4 w-1/2 max-lg:mt-2 text-black font-bold bg-transparent border-2 border-black hover:bg-transparent hover:text-white hover:border-white"
      >
        Kembali ke Home
      </ButtonLink>
    </>
  );
}

// Komponen untuk hasil Non-Developer yang Lolos
function NonDevLolosResult({
  developer,
  announcementInfo,
}: {
  developer: Developer;
  announcementInfo: ReturnType<typeof getAnnouncementInfo>;
}) {
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
          className="font-montserrat max-lg:text-2xl font-bold text-blue-900 text-center leading-4"
        >
          SELAMAT KAMU DITERIMA!
        </Typography>
        <Typography
          variant="h5"
          className="font-montserrat max-lg:text-2xl font-bold text-blue-900 text-center leading-4"
        >
          SEBAGAI{" "}
          <span className="font-extrabold underline">
            {announcementInfo.readableRole}!
          </span>
        </Typography>
      </div>

      {/* Button untuk grup spesifik berdasarkan posisi */}
      {announcementInfo.whatsappLink && (
        <ButtonLink
          href={announcementInfo.whatsappLink}
          variant="yellow"
          className="rounded-none max-lg:w-full mt-8 w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
        >
          Masuk Grup Divisi!
        </ButtonLink>
      )}
    </>
  );
}

// Komponen untuk hasil yang tidak lolos (Developer maupun Non-Developer)
function TidakLolosResult({
  developer,
  announcementInfo,
}: {
  developer: Developer;
  announcementInfo: ReturnType<typeof getAnnouncementInfo>;
}) {
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
          MAAF KAMU BELUM DITERIMA
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-2 w-3/4 max-lg:w-full font-semibold text-blue-900 text-center leading-5"
        >
          Bukan berarti kamu gagal, bukan berarti kamu tidak cukup baik. Terus
          asah kemampuanmu, terus berproses, dan jangan menyerah!
        </Typography>
      </div>

      <ButtonLink
        href="/"
        variant="yellow"
        className="rounded-none max-lg:w-full mt-8 w-1/2 max-lg:mt-6 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
      >
        Kembali ke Home
      </ButtonLink>
    </>
  );
}

// Komponen untuk NRP yang overlap - perlu suffix
function OverlapNRPResult({ nrp }: { nrp: string }) {
  // Dapatkan nama untuk greeting personal
  const tempDev =
    findDeveloperByNRP(`${nrp}-dev`) || findDeveloperByNRP(`${nrp}-nondev`);
  const namaDepan = tempDev?.namaDepan || "Kamu";

  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-center max-lg:px-4">
        <Typography
          variant="h4"
          className="font-montserrat font-extrabold max-lg:text-2xl text-blue-900 text-center leading-6"
        >
          HAI {namaDepan.toUpperCase()}! 👋
        </Typography>
        <Typography
          variant="h6"
          className="font-montserrat mt-4 font-semibold text-blue-900 text-center leading-5"
        >
          Kamu memiliki hasil di 2 kategori! Silahkan pilih:
        </Typography>
        <div className="mt-6 w-full space-y-4 flex flex-col items-center">
          <ButtonLink
            href={`/announcement/result?nrp=${nrp}-dev`}
            variant="yellow"
            className="rounded-none w-full max-lg:w-full text-black font-bold bg-yellow-400 hover:bg-yellow-500"
          >
            Lihat Hasil Developer
          </ButtonLink>
          <ButtonLink
            href={`/announcement/result?nrp=${nrp}-nondev`}
            variant="yellow"
            className="rounded-none w-full max-lg:w-full text-black font-bold bg-transparent border-2 border-black hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
          >
            Lihat Hasil Non-Developer
          </ButtonLink>
        </div>
        <Typography
          variant="p"
          className="font-montserrat mt-4 text-sm text-blue-800 text-center"
        >
          Atau ketik manual: <strong>{nrp}-dev</strong> atau{" "}
          <strong>{nrp}-nondev</strong>
        </Typography>
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

        <ButtonLink
          href="/"
          variant="yellow"
          className="rounded-none max-lg:w-full mt-6 w-1/2 text-black font-bold bg-yellow-400 hover:bg-yellow-500"
        >
          Coba Lagi
        </ButtonLink>
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
