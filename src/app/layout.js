
import Construction from "@/components/Construction";
import "./globals.scss";
import { Ubuntu } from "next/font/google";
import Header from "@/components/Header";

const ubuntu = Ubuntu({ weight: ['300','500', '700'], subsets: ["latin"]});
export const metadata = {
  title: "LSH",
  description: "Les Studios du Héron",
};


export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${ubuntu.className} h-screen w-screen bg-violet-200 dark:bg-violet-950 dark:text-indigo-100`}>
        <Header />
        <main >{children}</main>
        <Construction />
      </body>
    </html>
  );
}