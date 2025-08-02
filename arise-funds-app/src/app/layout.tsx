import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AriseFunds - Empowering the Future, One Student at a Time",
  description: "AriseFunds is committed to transforming access to quality education and global job placement through financial management, strategic partnerships, and holistic student support.",
  keywords: "student finance, education funding, job placement, workforce development, Africa education, BPO training",
  authors: [{ name: "AriseFunds" }],
  openGraph: {
    title: "AriseFunds - Empowering the Future, One Student at a Time",
    description: "Transforming access to quality education and global job placement through financial management and strategic partnerships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
