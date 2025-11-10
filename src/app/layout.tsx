import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ricardo - Portafolio | Desarrollador Web & IA",
  description: "Estudiante de secundaria apasionado por la tecnología. Usando IA para aprender desarrollo web y crear proyectos increíbles.",
  keywords: ["portafolio", "desarrollo web", "inteligencia artificial", "Ricardo", "programador", "estudiante"],
  authors: [{ name: "Ricardo" }],
  creator: "Ricardo",
  openGraph: {
    title: "Ricardo - Portafolio | Desarrollador Web & IA",
    description: "Estudiante de secundaria apasionado por la tecnología. Usando IA para aprender desarrollo web y crear proyectos increíbles.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}