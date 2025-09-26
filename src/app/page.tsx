"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect otomatis ke /announcement
    router.replace("/announcement");
  }, [router]);

  // Tampilkan loading atau tidak ada yang ditampilkan
  return null;
}
