"use client";

import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

interface FormData {
  nrp: string;
}

export default function Announcement() {
  const methods = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const nrpValue = data.nrp.trim();

    if (!nrpValue) {
      alert("Mohon masukkan NRP Anda");
      return;
    }

    try {
      // Gunakan API untuk validasi server-side
      const response = await fetch("/api/validate-nrp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nrp: nrpValue }),
      });

      const result = await response.json();

      if (result.found) {
        // Redirect ke result dengan NRP sebagai parameter
        router.push(`/announcement/result?nrp=${nrpValue}`);
      } else {
        // Redirect ke result dengan status not found
        router.push(`/announcement/result?result=notfound`);
      }
    } catch (error) {
      console.error("Error validating NRP:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <main className="w-screen relative overflow-hidden max-lg:px-6 flex flex-col justify-center items-center h-screen bg-[url('/images/background-announcement.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col justify-center items-center ">
        <NextImage
          src="/logo-flexoo.svg"
          alt="Flexoo Logo"
          width={100}
          height={50}
        />
        <Typography
          variant="h5"
          className="font-montserrat font-extrabold max-lg:text-3xl text-blue-900"
        >
          FLEXOO 2025
        </Typography>
      </div>
      <div className="mt-4 max-lg:mt-2">
        <Typography
          variant="h4"
          className="font-montserrat font-extrabold max-lg:text-3xl text-blue-900 text-center leading-4"
        >
          PENGUMUMAN <br /> OPEN RECUIRTMENT FLEXOO
        </Typography>
        <Typography
          variant="p"
          className="font-montserrat font-semibold text-blue-900 text-center leading-4"
        >
          Silahkan masukan NRP kamu dan buka hasil seleksi Oprec Flexoo 2025
        </Typography>
      </div>
      <div className="px-6 py-4 bg-blue-900 max-lg:w-full rounded-lg w-1/2 flex flex-col flex-start gap-2 max-lg:mt-6  mt-8">
        <Typography
          variant="p"
          className="font-montserrat font-semibold text-white leading-4 "
        >
          Masukan NRP
        </Typography>
        <div className="flex gap-2 max-lg:w-full">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="flex gap-2 w-full max-lg:flex-col"
            >
              <div className="w-full">
                <Input
                  type="text"
                  id="nrp"
                  helperText="Contoh: 5025231025"
                  helperTextClassName="text-white"
                  className="rounded-none focus:outline-yellow-500 focus:ring-yellow-500 focus:border-yellow-500"
                  validation={{ required: "NRP harus diisi" }}
                  disabled
                />
              </div>
              <Button
                type="submit"
                className="h-fit w-fit text-nowrap max-lg:w-full max-lg:mt-2 bg-yellow-400 rounded-none text-black font-bold font-monserrat hover:bg-yellow-500 px-10"
                variant="yellow"
                color="white"
              >
                Lihat Hasil
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <NextImage
        src="/logo-flexoo.svg"
        alt="Flexoo Logo"
        width={500}
        height={400}
        className="absolute bottom-0 right-0 max-lg:scale-50 translate-x-40 translate-y-48"
      />
    </main>
  );
}
