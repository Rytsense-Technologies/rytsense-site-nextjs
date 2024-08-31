import { Inter } from "next/font/google";
import "./globals.css";
import ClutchNavNew from "../components/_app/ClutchNavNew";
import FooterClutch from "../components/_app/FooterClutch";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClutchNavNew />
        <main>
          {children}
        </main>
        <FooterClutch />
      </body>
    </html>
  );
}
