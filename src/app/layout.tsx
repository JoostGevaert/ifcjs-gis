import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IFC.js Frontend BIM App",
  description: "First steps towards a frontend BIM app with IFC.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 dark:text-white max-w-screen-xl mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="mx-4">{children}</main>
      </body>
    </html>
  );
}
