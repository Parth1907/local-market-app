import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from './ui/navbar'
const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Website Name",
  description: "A e-commerce place for local vendors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} m-0 p-0 flex flex-col items-center bg-white min-h-[100vh] overflow-x-hidden`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
