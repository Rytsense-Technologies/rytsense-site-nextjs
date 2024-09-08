"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import ClutchNavNew from "../components/_app/ClutchNavNew";
import FooterClutch from "../components/_app/FooterClutch";
import Footer from "../components/_app/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isClutchRoute, setIsClutchRoute] = useState(false);
  const pathname = usePathname();

  const clutchRoutes = [
    "/",
    "/clutch",
    "/ai-development-services-usa",
    "/software-development-services-usa",
    "/hire-developers-in-india",
  ];

  useEffect(() => {
    if (clutchRoutes.includes(pathname)) {
      setIsClutchRoute(true);
    } else {
      setIsClutchRoute(false);
    }
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClutchNavNew
          key={pathname}
          isTransparent={isHomePage ? true : false}
        />

        <main>{children}</main>
        {isClutchRoute ? <FooterClutch /> : <Footer />}
      </body>
    </html>
  );
}
