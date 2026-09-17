import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://avaricetech.com"),
  title: "Avarice Tech | Software House & Digital Agency",
  description: "Avarice Tech provides full stack web development, digital transformation, and business intelligence solutions for B2B enterprises.",
  keywords: ["Software House Jakarta", "Web Development", "Digital Agency", "Data Intelligence", "Machine Learning","B2B IT Solutions"],
  openGraph: {
    title: "Avarice Tech | Software House & Digital Agency",
    description: "Architecting high performance web applications, scalable software, and data driven systems for enterprise growth.",
    url: "https://avaricetech.com",
    siteName: "Avarice Tech",
    images: [
      {
        url: "/avarice.png",
        width: 1200,
        height: 630,
        alt: "Avarice Tech Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/avarice.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}