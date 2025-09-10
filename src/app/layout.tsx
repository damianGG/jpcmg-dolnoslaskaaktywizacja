import type { Metadata } from "next";
import { Manrope } from "next/font/google";
// Bootstrap and custom scss
import "@/assets/scss/style.scss";
import NavbarOne from "@/components/blocks/navbar/navbar-1/NavbarOne";
import Toplogo from "@/components/blocks/navbar/top-logo/Toplogo";
import Footer2 from "@/components/blocks/footer/Footer2";
import Link from "next/link";
import AccessibilityButton from "@/components/reuseable/AccessibilityButton";
import PopupForm from "@/components/blocks/form/popupform";



const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dolnośląska Fabryka Aktywizacji",
  description: "Dolnośląska Fabryka Aktywizacji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="pl" data-bs-theme="light">
      <head>
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/img/favicon.ico" />
      </head>
      <body className={manrope.className}>

        <NavbarOne button={<PopupForm />} />
        <AccessibilityButton />
        <div>{children}</div>
        <Footer2 />
      </body>
    </html>

  );
}
