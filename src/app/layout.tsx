// app/layout.tsx
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";  
import Footer from "@/components/footer/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",  // Ensure this variable matches the one used in globals.css
  subsets: ["latin"],
});

export const metadata = {
  title: "Spritle",
  description: "Web and Mobile Development Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased bg-primary text-secondary`}>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main className="flex-1">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
