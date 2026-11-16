import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LinkCheckout } from "@/components/lp/LinkCheckout";
import { PixelMeta } from "@/components/lp/PixelMeta";
import "./lp.css";

const fonte = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "700", "800"], display: "swap" });

const SITE = (process.env.SITE_URL || "https://seonaia.com.br").replace(/\/$/, "");
const TITULO = "SEO+GEO para Profissionais Liberais: seu site pronto pro Google e pras IAs";
const DESCRICAO =
  "Guia prático com app, modelos e checklists para dentistas, psicólogos e advogados deixarem o site pronto para ser encontrado no Google e lido pelo ChatGPT e pelo Gemini em 7 dias de trabalho.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  robots: { index: true, follow: true },
  alternates: { canonical: SITE + "/" },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: SITE + "/",
    siteName: "SEO na IA",
    locale: "pt_BR",
    type: "website",
    images: [{ url: SITE + "/capas/seo-geo.png", width: 1080, height: 1080, alt: "Capa do guia SEO+GEO para Profissionais Liberais" }],
  },
};

const CAPITULOS = [
  ["Como seu paciente e seu cliente procuram você hoje", "Google, mapa e IAs: o que mudou e o que é realista esperar."],
  ["O teste das 10 perguntas", "Descubra se o ChatGPT e o Gemini já conhecem você, com prompts prontos e uma nota de 0 a 30."],
  ["Limites éticos do CFO, do CFP e da OAB", "O que pode e o que não pode na divulgação online da sua profissão."],
  ["O checklist SEO+GEO de 30 itens", "Base técnica, presença local, autoridade e conteúdo, item por item."],
  ["Páginas de serviço que a IA consegue ler", "A estrutura bloco a bloco e o modelo pronto pra preencher."],
  ["FAQ com schema", "O código que as máquinas entendem, pronto pra colar no WordPress ou no Wix."],
  ["O plano de 7 dias + 90 dias de conteúdo", "O que fazer em cada dia e 36 pautas pra dentista, psicólogo e advogado."],
  ["Monitoramento mensal", "A rotina de 30 minutos pra medir e ajustar todo mês."],
];

const FAQ = [
  ["É um curso em vídeo?", "Não. É um guia completo em texto, entregue num app fácil de navegar no celular e no computador, com modelos e prompts com botão de copiar e checklists que salvam o seu progresso. Nada de assistir horas de aula."],
  ["Em quanto tempo vou aparecer no ChatGPT?", "Ninguém pode garantir isso, e desconfie de quem garante. O que o guia faz é deixar seu site pronto em 7 dias de trabalho. A partir daí, aparecer com frequência nas respostas das IAs costuma levar de 3 a 6 meses de constância, dependendo da sua cidade e da concorrência."],
  ["Preciso saber programar ou mexer com código?", "Não. Os modelos de código (schema) já vêm prontos pra copiar e colar, com o passo a passo pra WordPress e Wix. Se o seu site foi feito por outra pessoa, o guia mostra exatamente o que pedir a ela."],
  ["Serve pra minha profissão?", "Foi feito pra dentistas, psicólogos e advogados, com exemplos, pautas e regras éticas de cada conselho. Outros profissionais liberais de saúde e serviços também conseguem aplicar o método, adaptando os exemplos."],
  ["Eu nem tenho site. Serve pra mim?", "Serve. O guia mostra quais páginas criar primeiro e como estruturá-las. Você pode montar o site numa plataforma simples, como Wix ou WordPress, já no formato certo."],
  ["Como recebo o acesso?", "Assim que o pagamento é aprovado, você recebe um e-mail com o link, o login e a senha do app. Pagamentos no Pix e no cartão costumam ser aprovados na hora. Se o e-mail não chegar, você gera um novo acesso na página de primeiro acesso, com o e-mail da compra e o número do pedido."],
  ["O acesso expira?", "Não. Você pode voltar ao guia sempre que quiser, inclusive pra refazer o teste e a rotina mensal."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, pede o reembolso pela Cakto e recebe 100% do valor de volta."],
];

export default function PaginaDeVendas() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "SEO+GEO para Profissionais Liberais",
      description: DESCRICAO,
      image: SITE + "/capas/seo-geo.png",
      brand: { "@type": "Brand", name: "SEO na IA" },
      offers: { "@type": "Offer", price: "67.00", priceCurrency: "BRL", availability: "https://schema.org/InStock", url: SITE + "/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];

  return (
    <div className={`lp ${fonte.className}`}>
      <PixelMeta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <header className="lp-hero">
        <div className="lp-w">
          <img className="lp-logo" src="/marca/logo-branca.png" alt="SEO na IA" width={705} height={180} />
          <div className="lp-hero-grid">
            <div>
              <p className="lp-eyebrow">Para dentistas, psicólogos e advogados</p>
              <h1>
                Seu paciente perguntou pro ChatGPT. <span>Ele indicou outro profissional.</span>
              </h1>
              <p className="lp-lead">
                O guia <strong>SEO+GEO para Profissionais Liberais</strong> mostra, passo a passo, como deixar seu site pronto pra ser
                encontrado no Google e lido pelas inteligências artificiais, em <strong>7 dias de trabalho</strong> e sem contratar agência.
              </p>
              <LinkCheckout className="lp-btn" posicao="TOPO">Quero o guia por R$67</LinkCheckout>
              <p className="lp-mini">Acesso imediato · Pix ou cartão em até 12x · Garantia de 7 dias</p>
            </div>
            <img className="lp-capa" src="/capas/seo-geo.webp" alt="Capa do guia SEO+GEO para Profissionais Liberais" width={1080} height={1080} />
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="lp-sec">
        <div className="lp-w lp-estreito">
          <h2>A indicação mudou de lugar</h2>
          <p>Antes, quem precisava de um dentista, de um psicólogo ou de um advogado pedia indicação no grupo da família ou buscava no Google.</p>
          <p>
            Hoje, cada vez mais gente abre o ChatGPT, o Gemini ou o Perplexity e pergunta: <em>“quem atende isso perto de mim?”</em>. A IA
            responde com <strong>nomes</strong>. Não existe segunda página.
          </p>
          <p>
            Se o seu nome não está na resposta, você não existe pra essa pessoa. E quase nunca é falta de competência:{" "}
            <strong>é o seu site, que a IA não consegue ler nem confirmar.</strong>
          </p>
          <div className="lp-cards3">
            <div><b>Google</b><span>Os links da busca tradicional</span></div>
            <div><b>Mapa</b><span>O Perfil da Empresa, que traz contatos da sua região</span></div>
            <div><b>IAs</b><span>ChatGPT, Gemini, Perplexity e as respostas de IA no topo do Google</span></div>
          </div>
          <p className="lp-nota">
            <strong>SEO</strong> é aparecer no Google. <strong>GEO</strong> é ser entendido e citado pelas IAs. O guia trabalha os dois ao
            mesmo tempo.
          </p>
        </div>
      </section>

      {/* O QUE TEM DENTRO */}
      <section className="lp-sec lp-escuro">
        <div className="lp-w">
          <h2>O que você recebe</h2>
          <p className="lp-sub">8 capítulos práticos, com modelos pra copiar, prompts prontos e checklists que salvam o seu progresso.</p>
          <ol className="lp-caps">
            {CAPITULOS.map(([t, d], i) => (
              <li key={t}>
                <span className="lp-num">{String(i + 1).padStart(2, "0")}</span>
                <div><strong>{t}</strong><p>{d}</p></div>
              </li>
            ))}
          </ol>
          <div className="lp-numeros">
            <div><b>30</b><span>itens no checklist SEO+GEO</span></div>
            <div><b>3</b><span>modelos de schema, um por profissão</span></div>
            <div><b>36</b><span>pautas de conteúdo pra 90 dias</span></div>
            <div><b>10</b><span>perguntas pra testar o que a IA sabe sobre você</span></div>
          </div>
        </div>
      </section>

      {/* COMO É O APP */}
      <section className="lp-sec">
        <div className="lp-w">
          <h2>Não é um PDF esquecido na pasta de downloads</h2>
          <p className="lp-sub">É um app de leitura, feito pra você aplicar enquanto lê, no celular ou no computador.</p>
          <div className="lp-telas">
            <figure><img src="/lp/app-sumario.webp" alt="Sumário do guia no app" width={780} height={1328} loading="lazy" /><figcaption>Capítulos organizados e marcados conforme você lê</figcaption></figure>
            <figure><img src="/lp/app-checklist.webp" alt="Checklist interativo no app" width={780} height={1328} loading="lazy" /><figcaption>Checklists que salvam o seu progresso</figcaption></figure>
            <figure><img src="/lp/app-modelo.webp" alt="Modelo com botão de copiar no app" width={780} height={1328} loading="lazy" /><figcaption>Modelos e prompts com botão Copiar</figcaption></figure>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="lp-sec lp-claro2">
        <div className="lp-w lp-estreito">
          <h2>Como funciona, do pagamento ao resultado</h2>
          <ol className="lp-passos">
            <li><b>Você finaliza a compra</b><span>No checkout seguro da Cakto, com Pix ou cartão em até 12x.</span></li>
            <li><b>Recebe o acesso por e-mail</b><span>Link, login e senha chegam assim que o pagamento é aprovado.</span></li>
            <li><b>Faz o teste das 10 perguntas</b><span>Em 40 minutos você descobre o que a IA sabe (ou não sabe) sobre você.</span></li>
            <li><b>Segue o plano de 7 dias</b><span>De 1 a 2 horas por dia: base técnica, Perfil da Empresa, páginas, FAQ e schema.</span></li>
            <li><b>Mantém a rotina mensal</b><span>30 minutos por mês pra medir no Google e nas IAs e ajustar o que precisa.</span></li>
          </ol>
        </div>
      </section>

      {/* EXPECTATIVA */}
      <section className="lp-sec">
        <div className="lp-w lp-estreito">
          <h2>O que é realista esperar</h2>
          <p>Prometer que você vai “aparecer no ChatGPT amanhã” seria mentira. Este é o caminho real:</p>
          <div className="lp-tabela">
            <div><b>7 dias de trabalho</b><span>Seu site fica estruturado: páginas, FAQ, schema e Perfil da Empresa ajustados.</span></div>
            <div><b>1 a 4 semanas</b><span>O Google lê as mudanças e as páginas novas começam a aparecer.</span></div>
            <div><b>2 a 6 meses</b><span>Você sobe nas buscas mais disputadas da sua especialidade.</span></div>
            <div><b>3 a 6 meses</b><span>As IAs passam a citar você com mais frequência, se você mantiver a constância.</span></div>
          </div>
          <p className="lp-nota">Os prazos variam com a cidade, a concorrência e o ponto de partida do seu site. O que depende de você cabe nos 7 dias. O resto é constância.</p>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="lp-sec lp-claro2">
        <div className="lp-w lp-duas">
          <div className="lp-sim">
            <h3>É pra você se…</h3>
            <ul>
              <li>Você é dentista, psicólogo(a), advogado(a) ou outro profissional liberal</li>
              <li>Depende quase só de indicação e quer ser encontrado por quem ainda não te conhece</li>
              <li>Tem site (ou quer ter) e não sabe se ele está ajudando</li>
              <li>Quer fazer do jeito certo, dentro das regras do seu conselho</li>
            </ul>
          </div>
          <div className="lp-nao">
            <h3>Não é pra você se…</h3>
            <ul>
              <li>Procura um truque pra aparecer amanhã sem fazer nada</li>
              <li>Não pode reservar 1 a 2 horas por dia durante uma semana</li>
              <li>Quer anúncios pagos: este guia é sobre presença orgânica</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTORA */}
      <section className="lp-sec lp-escuro">
        <div className="lp-w lp-estreito">
          <h2>Quem criou o método</h2>
          <p>
            <strong>Vanessa Schuengue</strong> é gerente de marketing numa agência e trabalha com SEO, GEO e criação de sites. Num projeto
            recente, ela criou do zero o site de um escritório de contabilidade, já preparado pro Google e pras IAs.
          </p>
          <div className="lp-caso">
            <div><b>4 a 6 meses</b><span>até o escritório começar a ser citado nas respostas das IAs</span></div>
            <div><b>10 a 12</b><span>contatos por mês vindos do site, depois de 8 meses</span></div>
          </div>
          <p className="lp-nota">Resultado de um caso real, que não garante o mesmo resultado pra você: cada site, cidade e área tem o seu ponto de partida. O método aplicado nesse caso é o que está no guia, adaptado pra dentistas, psicólogos e advogados.</p>
        </div>
      </section>

      {/* OFERTA */}
      <section className="lp-sec" id="oferta">
        <div className="lp-w lp-estreito">
          <div className="lp-oferta">
            <img src="/capas/seo-geo.webp" alt="" width={1080} height={1080} loading="lazy" />
            <div>
              <p className="lp-eyebrow">Guia + app · acesso imediato</p>
              <h2>SEO+GEO para Profissionais Liberais</h2>
              <ul>
                <li>8 capítulos práticos no app</li>
                <li>Checklist SEO+GEO de 30 itens</li>
                <li>Modelos de página e de schema pras 3 profissões</li>
                <li>Plano de 7 dias + 36 pautas pra 90 dias</li>
                <li>Prompts prontos com botão Copiar</li>
              </ul>
              <p className="lp-preco"><b>R$67</b><span>à vista no Pix ou em até 12x no cartão</span></p>
              <LinkCheckout className="lp-btn" posicao="OFERTA">Quero o guia agora</LinkCheckout>
            </div>
          </div>
          <div className="lp-comp">
            <h3>No checkout, você também pode adicionar (opcional)</h3>
            <div className="lp-comp-grid">
              <div><img src="/capas/auditoria.webp" alt="" width={1080} height={1080} loading="lazy" /><p><b>Auditoria de Site em 1 Dia</b>Os 20 erros que escondem seu site do Google, com relatório pronto pro webdesigner.</p></div>
              <div><img src="/capas/paginas.webp" alt="" width={1080} height={1080} loading="lazy" /><p><b>Páginas Prontas</b>Textos de Home, Sobre, Contato, 15 especialidades e 60 perguntas frequentes pra copiar e adaptar.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="lp-sec lp-claro2">
        <div className="lp-w lp-estreito lp-garantia">
          <div className="lp-selo">7<span>dias</span></div>
          <div>
            <h2>Garantia incondicional de 7 dias</h2>
            <p>Entre, leia, aplique. Se não gostar por qualquer motivo, peça o reembolso pela Cakto em até 7 dias e receba 100% do valor de volta. Sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-sec">
        <div className="lp-w lp-estreito">
          <h2>Perguntas frequentes</h2>
          <div className="lp-faq">
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="lp-final">
        <div className="lp-w lp-estreito">
          <h2>Comece hoje. A IA leva meses pra aprender quem você é.</h2>
          <LinkCheckout className="lp-btn" posicao="FINAL">Quero o guia por R$67</LinkCheckout>
          <p className="lp-mini">Garantia de 7 dias · Acesso imediato · Pagamento seguro pela Cakto</p>
        </div>
      </section>

      <footer className="lp-rodape">
        <div className="lp-w">
          <img src="/marca/logo-branca.png" alt="SEO na IA" width={141} height={36} />
          <p>
            <a href="/privacidade">Política de privacidade</a> · <a href="/termos">Termos de uso</a> · <a href="/primeiro-acesso">Já comprei: acessar</a>
          </p>
          <p className="lp-legal">
            Este site não faz parte do Facebook, do Google ou da OpenAI, nem é endossado por essas empresas. Os resultados dependem da
            aplicação do método e variam de caso para caso.
          </p>
        </div>
      </footer>
    </div>
  );
}
