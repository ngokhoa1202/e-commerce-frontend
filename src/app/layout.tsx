import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "./_components/Header";

const petitFormalScript: NextFontWithVariable = localFont({
  src: "./fonts/PetitFormalScript-Regular.ttf",
  variable: "--font-petit-formal",
  weight: "100 900",
});

const lato: NextFontWithVariable = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  weight: "100 900",
});

const karla: NextFontWithVariable = localFont({
  src: "./fonts/Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
  weight: "100 900",
});
const sedan: NextFontWithVariable = localFont({
  src: "./fonts/Sedan-Regular.ttf",
  variable: "--font-sedan",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZetStudy",
  description: "Invest in your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sedan.variable} ${karla.variable} ${lato.variable} ${petitFormalScript.variable} antialiased bg-blue-50 text-gray-700`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
