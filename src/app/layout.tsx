import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/providers/AOS.Provider";
import Header from "@/components/Header";
import SessionProvider from "@/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn English Online | Inshomovna Language School",
  description:
    "Join Inshomovna - an interactive language school offering certified English courses for all levels.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <SessionProvider>
          <AOSProvider />
          <Header />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
