import type { Metadata } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruhi Hemnani — Sales & Marketing",
  description:
    "Portfolio of Ruhi Hemnani, a sales and marketing professional focused on account growth, client relationships, and data-driven campaigns.",
  keywords: [
    "Ruhi Hemnani",
    "sales",
    "marketing",
    "account growth",
    "client relationship management",
    "business development",
    "Purdue Business Analytics",
  ],
  authors: [{ name: "Ruhi Hemnani" }],
  openGraph: {
    title: "Ruhi Hemnani — Sales & Marketing",
    description:
      "Portfolio of Ruhi Hemnani, a sales and marketing professional focused on account growth, client relationships, and data-driven campaigns.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
