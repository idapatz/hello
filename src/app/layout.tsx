import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import StyledComponentsRegistry from './registry';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ida Patzelt - Founder in Residence",
  description: "Ich baue Unternehmen mit Haltung. Klar. Digital. Menschlich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
