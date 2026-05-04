import "./globals.css";

export const metadata = {
  title: "LAW Foundation — Empowering Through Education",
  description:
    "Economic empowerment and education can change lives. We're driven by passion and a desire to make a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
