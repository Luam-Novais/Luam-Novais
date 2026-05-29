import type { Metadata } from "next";
import { Poppins, Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const PoppinsSans = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600']
});

const InterSans = Inter({
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600'],
});


export const metadata: Metadata = {
  title: "Luam Novais",
  description: "Meu Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${PoppinsSans.variable} ${InterSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
