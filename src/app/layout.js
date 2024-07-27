import "./globals.scss";
import { Raleway, Ubuntu } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const ubuntu = Ubuntu({ weight: ['300','500', '700'], subsets: ["latin"]});
const raleway = Raleway({weight: ['300','500', '700'], subsets: ["latin"]});

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
      
        
          <body className={`${ubuntu.className}`}>
          <Providers>  
            <Header />
            <main className={`${raleway.className}`}>
              {children}
            </main>
            </Providers>
            </body>
        
      
    </html>
  );
}