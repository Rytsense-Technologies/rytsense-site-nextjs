"use client";
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import ProgressBar from "../providers/ProgressBar";
import Navbar from "../components/_app/Navbar/Navbar";

const ClutchNavNew = dynamic(() => import("../components/_app/ClutchNavNew"), {
  ssr: false,
});
const FooterClutch = dynamic(() => import("../components/_app/FooterClutch"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/_app/Footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isClutchRoute, setIsClutchRoute] = useState(false);
  const pathname = usePathname();

  const clutchRoutes = [
    "/",
    "/clutch/",
    "/ai-development-company-india/",
    "/software-development-company-india/",
    "/hire-developers-in-india/",
    "/software-development-company-usa/",
    "/ai-development-company-usa/",
    "/industries-pages/finance/",
  ];

  useEffect(() => {
    if (clutchRoutes.includes(pathname)) {
      setIsClutchRoute(true);
    } else {
      setIsClutchRoute(false);
    }
  }, [pathname, clutchRoutes]);

  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dlg3i3ari/image/upload/v1724669142/logo_bgania.png"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M4ZC6LKR');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C8JKYVFJ7Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C8JKYVFJ7Y');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4ZC6LKR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar key={pathname} isTransparent={isHomePage} />
        <ProgressBar />
        <main>{children}</main>
        <FooterClutch />
      </body>
    </html>
  );
}
