import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revenue OS — Sistema Comercial para Inmobiliarias",
  description: "Construimos el sistema de crecimiento que conecta captación, CRM, automatización e inteligencia comercial en un solo motor conectado al revenue.",
  keywords: "inmobiliarias, CRM, automatización, revenue, sistema comercial, real estate",
  openGraph: {
    title: "Revenue OS — Sistema Comercial para Inmobiliarias",
    description: "Infraestructura comercial que conecta captación, CRM y automatización en un solo motor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
