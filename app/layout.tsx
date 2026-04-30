import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import en from "@/language/en.json";
import "../style/style.css";
import LanguageProvider from "@/contexts/LanguageProvider";

export const metadata: Metadata = {
  title: "Veronica Buschman - Art Gallery",
  description: "Gallery of paintings by Veronica Buschman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
