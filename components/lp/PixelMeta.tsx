"use client";
import Script from "next/script";

// Pixel do Meta na página de vendas: PageView + ViewContent. Só carrega se NEXT_PUBLIC_META_PIXEL_ID existir.
// A compra (Purchase) é disparada pela própria Cakto no checkout.
export function PixelMeta() {
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!id || !/^\d+$/.test(id)) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');fbq('track','PageView');fbq('track','ViewContent',{content_name:'SEO+GEO para Profissionais Liberais',value:67,currency:'BRL'});
`}</Script>
  );
}
