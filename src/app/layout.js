import { Space_Grotesk, Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "UTOPIC | Electronic Experiences",
  description:
    "Event Production | DJ Agency | Record Label. Curating the future of sonic architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-background text-on-background font-body antialiased selection:bg-primary selection:text-on-primary-fixed">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
