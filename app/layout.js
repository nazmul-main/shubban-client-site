import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../src/component/Navbar";
import Footer from "../src/component/Footer";
import { ColorProvider } from "../src/context/ColorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "শুব্বান দাওয়াতি কাফেলা",
  description: "Official website of শুব্বান দাওয়াতি কাফেলা",
  icons: {
    icon: [
      {
        url: '/logo/logo_1.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
    shortcut: '/logo/logo_1.jpg',
    apple: '/logo/logo_1.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/logo_1.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo/logo_1.jpg" />
      </head>
      <body className={`${geistSans.className} flex flex-col min-h-screen bg-background-color`}>
        <ColorProvider>
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </ColorProvider>
      </body>
    </html>
  );
}
