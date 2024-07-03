import Header from "@/components/Header";
import "./globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Roboto } from "next/font/google";
import { Raleway } from 'next/font/google';

export const metadata = {
  title: "LSH",
  description: "Les Studios du Héron",
};

const raleway = Raleway({ subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={raleway.className}>
      <body className="h-screen bg-gray-100">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}