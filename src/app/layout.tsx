import type { Metadata } from "next";
import localFont from "next/font/local";
import { Mona_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";

// Load Font 1FTV Avilock từ public
const avilockFont = localFont({
  src: [
    {
      path: "../../public/fonts/1FTV-Avilock-Bold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-avilock",
  fallback: ["sans-serif"],
});

// Load Font Mona Sans từ Google Fonts
const monaSansFont = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Van Tuan Dung - Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${avilockFont.variable} ${monaSansFont.variable}`}>
      <body>
        <div className="app-container">
          <Navbar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}