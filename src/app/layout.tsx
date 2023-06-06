import "../app/globals.css";

export const metadata = {
  title: "Joram Teneza",
  description: "My portfolio",
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
