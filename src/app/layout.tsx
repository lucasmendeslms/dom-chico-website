
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Suspense } from "react";
import "./globals.css";
import { SessionContext } from "./context/sessionContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dom Chico Barbearia",
  description: "Transformando estilo e confiança com cada corte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <SessionContext>
          {/* <Suspense fallback={ <Loading/> }> */}
            {children}
          {/* </Suspense> */}
        </SessionContext>
      </body>
    </html>
  );
}
