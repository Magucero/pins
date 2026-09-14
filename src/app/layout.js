import "./globals.css";

export const metadata = {
  title: "SQL Manager",
  description: "Aplicación para guardar consultas SQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}