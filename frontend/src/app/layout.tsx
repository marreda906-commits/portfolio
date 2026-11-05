import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig, assetPath } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Mohamed Reda MARZOUQ · Portfolio d’ingénierie", template: "%s · Mohamed Reda MARZOUQ" },
  description: siteConfig.description,
  icons: { icon: assetPath("/icon.svg") },
  ...(siteConfig.url ? { metadataBase: new URL(`${siteConfig.url.replace(/\/$/, "")}/`) } : {}),
  openGraph: { title: "Mohamed Reda MARZOUQ", description: siteConfig.description, type: "website", locale: "fr_FR" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><body>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <Header/><main id="main" tabIndex={-1}>{children}</main><Footer/>
  </body></html>;
}
