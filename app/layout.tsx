import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexo Legal | Direito claro, estratégia firme",
  description:
    "Projeto de portfólio de um escritório de advocacia fictício com atuação demonstrativa em Direito Civil, Contratos e Direito do Trabalho.",
  keywords: [
    "Nexo Legal",
    "Direito Civil",
    "Contratos",
    "Direito do Trabalho",
    "portfólio de desenvolvimento web",
  ],
  openGraph: {
    title: "Nexo Legal | Direito claro, estratégia firme",
    description:
      "Landing page de um escritório de advocacia fictício, desenvolvida como projeto de portfólio.",
    siteName: "Nexo Legal",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable} motion-safe:scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
