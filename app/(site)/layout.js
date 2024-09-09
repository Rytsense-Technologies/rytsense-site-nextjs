"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import ClutchNavNew from "../components/_app/ClutchNavNew";
import FooterClutch from "../components/_app/FooterClutch";
import Footer from "../components/_app/Footer";
import Modal from "../components/common/Modal";
import ProgressBar from "../providers/ProgressBar";

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

  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      setShowExitModal(true);
      // Customize the message if needed
      const message = "Are you sure you want to leave this page?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {showExitModal && <Modal />}
        <ClutchNavNew
          key={pathname}
          isTransparent={isHomePage ? true : false}
        />
        <ProgressBar />
        <main>{children}</main>
        <FooterClutch />
        {/* {isClutchRoute ? <FooterClutch /> : <Footer />} */}
      </body>
    </html>
  );
}
