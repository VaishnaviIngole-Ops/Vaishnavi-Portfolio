import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaishnavi Ingole | DevOps Engineer",
  description:
    "Portfolio of Vaishnavi Ingole — DevOps Engineer focused on Linux, CI/CD, Docker, cloud and automation.",
  keywords: ["Vaishnavi Ingole", "DevOps Engineer", "Docker", "Jenkins", "AWS", "Linux"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}