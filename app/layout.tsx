import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Batista | Portfólio em Tecnologia",
  description:
    "Portfólio de Matheus Batista, profissional em transição de carreira para tecnologia, com projetos em suporte, experiência do usuário, automação e desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}