"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import ClutchNavNew from "../components/_app/ClutchNavNew";
import FooterClutch from "../components/_app/FooterClutch";
import Footer from "../components/_app/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isClutchRoute, setIsClutchRoute] = useState(false);

  const clutchRoutes = ["/", "/clutch"];

  useEffect(() => {
    // This will only run on the client side after the component has mounted
    const currentPath = window.location.pathname;
    if (clutchRoutes.includes(currentPath)) {
      setIsClutchRoute(true);
    } else {
      setIsClutchRoute(false);
    }
  }, []); // Run once after the initial render

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClutchNavNew />
        <main>{children}</main>
        {isClutchRoute ? <FooterClutch /> : <Footer />}
      </body>
    </html>
  );
}
