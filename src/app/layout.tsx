import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
