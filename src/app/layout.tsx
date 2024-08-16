import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OYO Rooms Clone",
  description: "Made By Rocky Dey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <section>{children}</section>
      </body>
    </html>
  );
}
