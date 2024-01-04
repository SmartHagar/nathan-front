/** @format */

import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Biro SDM Universitas Ottow Geissler",
  description: "Website Biro SDM Universitas Ottow Geissler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
