import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andrew Portfolio",
  description: "Made With Love by Andrew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={`${manrope.className} ${manrope.variable} bg-black`}>

        {children}</body>
    </html>
  );
}
