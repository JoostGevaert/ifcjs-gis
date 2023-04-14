import "./globals.css";
import DarkMode from "@/components/DarkMode";

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
      <body className="dark:bg-gray-900 dark:text-white">
        <header>
          <nav className="m-2">
            <DarkMode />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
