
import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "SQL Manager",
  description: "Aplicación para guardar consultas SQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Link href="/resumen_ejecutivo" className="text-slate-400 font-medium hover:text-[#BD00FF] transition-colors duration-300 focus:border-b-2 border-[#BD00FF] focus:text-[#BD00FF]">
          Resumen
        </Link>
        {children}

      </body>
    </html>
  );
}