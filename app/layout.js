import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorProvider } from "../src/context/ColorContext";
import ReduxProvider from "../src/providers/ReduxProvider";
import NotificationSystem from "../src/component/NotificationSystem";
import AuthInitializer from "../src/component/AuthInitializer";
import RouteAwareLayout from "../src/component/RouteAwareLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export const metadata = {
  title: "শুব্বান দাওয়াতি কাফেলা",
  description: "Official website of শুব্বান দাওয়াতি কাফেলা - দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি",
  keywords: ["শুব্বান", "দাওয়াতি", "কাফেলা", "ইসলাম", "দাওয়াত", "বাংলাদেশ"],
  authors: [{ name: "শুব্বান দাওয়াতি কাফেলা" }],
  creator: "শুব্বান দাওয়াতি কাফেলা",
  publisher: "শুব্বান দাওয়াতি কাফেলা",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.shubbandawatikafela.org/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "শুব্বান দাওয়াতি কাফেলা",
    description: "দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি",
    url: 'shubbandawatikafela.org/', // Replace with your actual domain
    siteName: 'শুব্বান দাওয়াতি কাফেলা',
    images: [
      {
        url: '/logo/logo_1.jpg',
        width: 1200,
        height: 630,
        alt: 'শুব্বান দাওয়াতি কাফেলা',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "শুব্বান দাওয়াতি কাফেলা",
    description: "দাওয়াত আমাদের স্বপ্ন, ঐক্য আমাদের শক্তি",
    images: ['/logo/logo_1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo/logo_1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/logo_1.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo/logo_1.jpg" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0D47A1" />
        <meta name="msapplication-TileColor" content="#0D47A1" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${geistSans.className} flex flex-col min-h-screen bg-background-color antialiased`}>
        <ReduxProvider>
          <ColorProvider>
            <AuthInitializer />
            <NotificationSystem />
            <RouteAwareLayout>
              {children}
            </RouteAwareLayout>
          </ColorProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
