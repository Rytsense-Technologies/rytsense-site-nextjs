"use client";

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


  // const isHomePage = pathname === "/" || pathname === "/software-development-india/";
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dlg3i3ari/image/upload/v1724669142/logo_bgania.png"
        />
        {/* Google Analytics Script */}
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
        <Navbar key={pathname} isTransparent={isHomePage} />
        <ProgressBar />
        <main>{children}</main>
        {isClutchRoute ? <FooterClutch /> : <Footer />}
      </body>
    </html>
  );
}
