import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Andrew Portfolio | Full Stack Developer",
  description: "Portfolio of Andrew, a Full Stack Developer specializing in web development, React, TypeScript, and modern JavaScript technologies. View my projects and experience.",
  keywords: ["Full Stack Developer", "Web Development", "React", "TypeScript", "JavaScript", "Portfolio", "Software Engineer"],
  authors: [{ name: "Andrew" }],
  openGraph: {
    title: "Andrew Portfolio | Full Stack Developer",
    description: "Portfolio of Andrew, a Full Stack Developer specializing in web development.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
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
        {children}
      </body>
    </html>
  );
}
