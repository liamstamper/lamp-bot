import "../styles/globals.css";

export const metadata = {
  title: "Lamp AI PR Review",
  description: "An AI powered Pull Request review bot",
  icons: {
    icon: "/favicon.png",
  },
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
