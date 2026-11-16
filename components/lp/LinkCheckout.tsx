"use client";
import { useEffect, useState } from "react";

const CHECKOUT = "https://pay.cakto.com.br/3sz7fhb";
const REPASSAR = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "sck", "fbclid", "src"];

// Botão que leva ao checkout carregando as UTMs e o sck do anúncio (é o sck que aparece nas vendas da Cakto).
export function LinkCheckout({ children, className, posicao }: { children: React.ReactNode; className?: string; posicao: string }) {
  const [href, setHref] = useState(`${CHECKOUT}?sck=LP-${posicao}`);
  useEffect(() => {
    const atual = new URLSearchParams(window.location.search);
    const saida = new URLSearchParams();
    REPASSAR.forEach((k) => {
      const v = atual.get(k);
      if (v) saida.set(k, v);
    });
    if (!saida.get("sck")) saida.set("sck", `LP-${posicao}`);
    setHref(`${CHECKOUT}?${saida.toString()}`);
  }, [posicao]);
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
