import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WirWohnen — Euer Haus, eure Verwaltung",
  description:
    "WirWohnen gibt Eigentümergemeinschaften die Werkzeuge, um ihr Mehrparteienhaus selbst zu managen. Von Kostenanalysen über Sanierungsoptionen bis zur gemeinsamen Entscheidungsfindung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
