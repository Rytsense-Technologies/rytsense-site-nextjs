"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import dynamic from "next/dynamic";
// import ClutchNavNew from "../components/_app/ClutchNavNew";
// import FooterClutch from "../components/_app/FooterClutch";
// import Footer from "../components/_app/Footer";
// import Modal from "../components/common/Modal";
import ProgressBar from "../providers/ProgressBar";
import Navbar from "../components/_app/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import wp from "../../public/images/wp.png";

const ClutchNavNew = dynamic(() => import("../components/_app/ClutchNavNew"), {
  ssr: false,
});
const FooterClutch = dynamic(() => import("../components/_app/FooterClutch"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/_app/Footer"), {
  ssr: false,
});
const Modal = dynamic(() => import("../components/common/Modal"), {
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
    "/company/hire-developers-in-india/",
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
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dlg3i3ari/image/upload/v1724669142/logo_bgania.png"
        />
      </head>
      <body className={inter.className}>
        {showExitModal && <Modal />}
        {/* <ClutchNavNew
          key={pathname}
          isTransparent={isHomePage ? true : false}
        /> */}
        <Navbar key={pathname} isTransparent={isHomePage ? true : false} />
        <ProgressBar />
        <main>{children}</main>
        {/* <FooterClutch /> */}
        {isClutchRoute ? <FooterClutch /> : <Footer />}
        <div className="fixed bottom-0 right-5 p-3 z-20">
          <a
            href="http://wa.me/+917010044153?text=Hello how can I help you?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={wp} width={60} height={60} alt="WhatsApp Icon" />
          </a>
        </div>
      </body>
    </html>
  );
} 0.
  
