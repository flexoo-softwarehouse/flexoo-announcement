import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Providers from "@/app/providers";
import SecurityProtection from "@/components/SecurityProtection";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Flexoo",
    template: "%s | Flexoo",
  },
  description: "Flexoo 2025 - Announcement Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SecurityProtection />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
