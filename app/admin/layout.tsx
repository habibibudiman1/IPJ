import "../globals.css";

export const metadata = {
  title: "Admin Dashboard - PT Intiboga Pangan Jaya",
  description: "Content Management System for PT Intiboga Pangan Jaya website",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-gray-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
