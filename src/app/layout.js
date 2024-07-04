import "./globals.scss";


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
      <body className="h-screen bg-violet-200">
       
        <main>{children}</main>

      </body>
    </html>
  );
}