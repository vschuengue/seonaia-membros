# As 5 ferramentas gratuitas da auditoria

Esta auditoria foi desenhada para caber em **1 dia de trabalho** (cerca de 4 a 6 horas, que você pode dividir em duas manhãs) e para usar **só ferramentas gratuitas**. Você não precisa ser técnico: cada erro dos próximos capítulos diz exatamente onde olhar e o que fazer.

## Como a auditoria funciona

1. **Manhã (2 a 3 horas):** você prepara as 5 ferramentas (este capítulo) e roda o diagnóstico dos 20 erros (capítulos 2 a 5), marcando o que encontrar.
2. **Tarde (2 a 3 horas):** você classifica os erros na tabela de impacto × esforço, corrige os que dá para corrigir sozinho e preenche o relatório para o webdesigner com o resto (capítulo 6).

| Ferramenta | Para que serve | Custo | Precisa de conta? |
|---|---|---|---|
| Google Search Console | Ver se o Google encontra e lê seu site | Grátis | Sim, conta Google |
| PageSpeed Insights | Medir velocidade e experiência no celular | Grátis | Não |
| Validador de schema + Teste de resultados avançados | Conferir os dados estruturados | Grátis | Não |
| Perfil da Empresa no Google | Ver e corrigir sua presença no mapa | Grátis | Sim, conta Google |
| Screaming Frog SEO Spider | "Rastrear" o site e achar erros em massa | Grátis até 500 páginas | Não (instala no computador) |

## Ferramenta 1: Google Search Console

É o "painel de controle" do seu site dentro do Google. Mostra se as páginas estão indexadas, quais buscas levam até você e quais erros o Google encontrou.

**Como configurar (15 minutos):**

1. Acesse **search.google.com/search-console** e entre com sua conta Google.
2. Clique em **Adicionar propriedade → Prefixo do URL** e digite o endereço completo do site, com `https://`.
3. Escolha a verificação por **Tag HTML** e cole a tag no cabeçalho do site:
   - **WordPress:** instale o plugin gratuito **WPCode**, vá em **Code Snippets → Header & Footer** e cole no campo *Header*.
   - **Wix:** **Configurações → Ferramentas de SEO → Verificação do site → Google Search Console**.
   - **Outras plataformas ou site feito por terceiros:** peça ao webdesigner que insira a tag no `<head>`.
4. Volte ao Search Console e clique em **Verificar**.

> **Se o site já estava cadastrado:** ótimo, você já tem histórico. Se acabou de cadastrar, alguns relatórios levam de 2 a 3 dias para ter dados. Faça o resto da auditoria normalmente e volte a ele depois.

**O que você vai usar nele:** relatório **Páginas** (indexação), **Sitemaps**, **Inspeção de URL** e **Desempenho**.

## Ferramenta 2: PageSpeed Insights

Mede a velocidade e a experiência do site, com nota de 0 a 100 para o celular e para o computador.

**Como usar (5 minutos):**

1. Acesse **pagespeed.web.dev**.
2. Cole o endereço da página inicial e clique em **Analisar**.
3. Olhe primeiro a aba **Celular**: é a que importa mais.
4. Repita para 2 páginas de serviço importantes.

**Como ler a nota:**

| Nota | Leitura |
|---|---|
| 90 a 100 (verde) | Ótimo |
| 50 a 89 (laranja) | Precisa de melhorias |
| 0 a 49 (vermelho) | Problema sério, prioridade |

## Ferramenta 3: Validador de schema + Teste de resultados avançados

São duas páginas que conferem os **dados estruturados** (schema), o código que descreve seu negócio para as máquinas.

1. **validator.schema.org**: cole o endereço da página e clique em **Executar teste**. Mostra todos os blocos de schema e os erros.
2. **search.google.com/test/rich-results**: mostra o que o Google consegue aproveitar desses dados.

Se aparecer "nenhum dado estruturado encontrado", é o **erro 16** desta auditoria.

## Ferramenta 4: Perfil da Empresa no Google

Para profissional que atende numa cidade, o Perfil da Empresa costuma gerar mais contatos do que o próprio site.

1. Acesse **business.google.com** com a conta Google responsável pelo negócio.
2. Se o perfil não aparecer, busque o nome da sua clínica/escritório no Google Maps. Se ele existir mas não for seu, clique em **"Reivindicar esta empresa"**.
3. Deixe aberto: você vai usar no erro 15.

## Ferramenta 5: Screaming Frog SEO Spider

É um programa que você instala no computador (Windows, Mac ou Linux). Ele "visita" todas as páginas do site, como o Google faz, e lista problemas em massa: títulos repetidos, links quebrados, páginas sem descrição. A versão gratuita rastreia até 500 páginas, o que é mais do que suficiente para um site de consultório ou escritório.

**Como usar (20 minutos):**

1. Baixe em **screamingfrog.co.uk/seo-spider** e instale.
2. Abra, cole o endereço do site no campo do topo e clique em **Start**.
3. Espere a barra chegar a 100% (em sites pequenos, leva 1 a 3 minutos).
4. Use as abas do topo:

| Aba | O que mostra | Erro relacionado |
|---|---|---|
| **Response Codes → Client Error (4xx)** | Links quebrados | Erro 19 |
| **Page Titles** | Títulos ausentes, repetidos ou longos demais | Erro 11 |
| **Meta Description** | Descrições ausentes ou repetidas | Erro 11 |
| **H1** | Páginas sem título principal ou com vários | Erro 12 |
| **Images → Missing Alt Text** | Imagens sem descrição | Erro 7 |
| **Content → Low Content Pages** (na barra lateral, "Overview") | Páginas com pouco texto | Erro 13 |

> **Não consegue instalar programas no computador?** Pule o Screaming Frog. Dá para fazer a auditoria olhando página por página: leva mais tempo, mas funciona. Cada erro diz como verificar manualmente.

## Planilha de controle da auditoria

Crie uma planilha com estas colunas e preencha uma linha por erro conforme avançar:

```copiar Cabeçalho da planilha da auditoria
Nº	Erro	Encontrado? (sim/não)	Páginas afetadas	Impacto (alto/médio/baixo)	Esforço (baixo/médio/alto)	Quem corrige (eu/webdesigner)	Status
```

## Checklist do capítulo

- [ ] Configurei (ou acessei) o Google Search Console
- [ ] Rodei o PageSpeed Insights na página inicial e em 2 páginas de serviço
- [ ] Testei a página inicial no validator.schema.org
- [ ] Acessei o painel do Perfil da Empresa (ou reivindiquei o perfil)
- [ ] Instalei e rodei o Screaming Frog (ou decidi fazer a verificação manual)
- [ ] Criei a planilha de controle da auditoria
