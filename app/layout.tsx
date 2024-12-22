import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-orange-200 p-72"
      >
        {children}
      </body>
    </html>
  );
}
