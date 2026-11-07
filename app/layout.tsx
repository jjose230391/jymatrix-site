import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jymatrix.com"),
  alternates: { canonical: "/" },
  title: "Desarrollo de software a medida para empresas | JYMatrix",
  description:
    "Desarrollamos software a medida, integramos sistemas y ofrecemos mantenimiento, outsourcing y consultoría tecnológica para empresas.",
  applicationName: "JYMatrix",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Desarrollo de software y consultoría | JYMatrix",
    description: "Software a medida, integración de sistemas, mantenimiento y consultoría tecnológica para empresas.",
    url: "/",
    siteName: "JYMatrix",
    type: "website",
    locale: "es",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JYMatrix" }],
  },
  twitter: { card: "summary_large_image", title: "Desarrollo de software y consultoría | JYMatrix", description: "Software a medida, integraciones y mantenimiento para empresas.", images: ["/og-image.jpg"] },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061735",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
