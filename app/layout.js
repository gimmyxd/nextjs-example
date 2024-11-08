"use client"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AsertoProvider } from '@aserto/aserto-react'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><AsertoProvider>{children}</AsertoProvider></body>
    </html>
  );
}
