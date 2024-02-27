import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "API UF",
  description: "API para obtener el valor de la UF en base a una fecha en especifico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-r from-slate-900 to-slate-700">
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
