/** @format */

import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bidang SDM Universitas Ottow Geissler",
  description: "Website Bidang SDM Universitas Ottow Geissler",
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
