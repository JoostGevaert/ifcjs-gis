import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

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
      <body className="mx-auto max-w-screen-xl dark:bg-gray-900 dark:text-white">
        <Providers>
          <header>
            <Navbar />
          </header>
          <main className="mx-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
