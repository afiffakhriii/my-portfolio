import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afif Fakhri | Portofolio",
  description: "Website portofolio pribadi Afif Fakhri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
          <div className="pt-20">{children}</div>
        <Footer /> {/* ⬅️ Tambahkan ini */}
      </body>
    </html>
  );
}
