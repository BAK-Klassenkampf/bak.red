import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import clsx from "clsx";
import Footer from "@/components/footer";
const gilroyBlack = localFont({ src: "../../public/fonts/Gilroy-Black.otf" });

export const metadata: Metadata = {
  title: "BAK Klassenkampf",
  description:
    "Wir sind der BAK Klassenkampf! Ein marxistischer, internationalistischer, antiimperialistischer und revolutionärer Zusammenschluss in der Linksjugend ['solid] ☭",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(gilroyBlack.className, "text-xl")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
