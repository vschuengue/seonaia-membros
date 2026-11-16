# Erros 16 a 20: confiança e leitura pelas IAs

Os últimos cinco erros são os que mais pesam quando a pergunta é **"a IA vai me recomendar?"**. Eles tratam de mostrar que você é um profissional real e habilitado, de dar respostas prontas pra IA citar e de garantir que as IAs consigam, de fato, ler o seu site.

## Erro 16: Site sem dados estruturados (schema)

**Como identificar:** cole o endereço da página inicial em **validator.schema.org** e clique em **Executar teste**.

| Resultado | Situação |
|---|---|
| "Nenhum dado estruturado encontrado" | ❌ Erro 16 confirmado |
| Só aparece `WebSite`, `WebPage` ou `Organization` genérico | ⚠️ Existe, mas não diz que você é dentista, psicólogo ou advogado |
| Aparece `Dentist`, `MedicalBusiness`, `LegalService` ou `LocalBusiness` com endereço e telefone | ✅ Ok |
| Aparece com erros (em vermelho) | ⚠️ Precisa de correção |

**Por que importa:** o schema é a forma mais direta de dizer às máquinas "este é um dentista, com este registro, neste endereço". Sem ele, o Google e as IAs precisam adivinhar a partir do texto.

**Como corrigir:** instale um bloco de schema do tipo certo na página inicial. Modelo mínimo (troque o tipo conforme a profissão: `Dentist`, `MedicalBusiness` pra psicologia, `LegalService` pra advocacia):

```copiar Schema mínimo de negócio local
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "[Dentist / MedicalBusiness / LegalService]",
  "name": "[Nome do consultório, clínica ou escritório]",
  "url": "https://[seudominio.com.br]",
  "telephone": "+55-[DDD]-[número]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Rua, número, sala]",
    "addressLocality": "[Cidade]",
    "addressRegion": "[UF]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "employee": {
    "@type": "Person",
    "name": "[Seu nome profissional]",
    "identifier": "[CRO/CRP/OAB e número]"
  }
}
</script>
```

**Onde colar:** WordPress, plugin **WPCode → Header & Footer → Header**. Wix, **Configurações da página → SEO avançado → Marcação de dados estruturados** (sem as linhas `<script>`). Depois valide de novo até dar **zero erros**.

## Erro 17: Sem página "Sobre" com registro profissional

**Como identificar**

1. Seu site tem uma página "Sobre", "Quem sou" ou "O escritório"?
2. Ela mostra **nome completo, formação, registro no conselho (CRO, CRP, OAB) e foto real**?
3. O número de registro aparece também no **rodapé** de todas as páginas?

**Por que importa:** as IAs e o Google avaliam a **credibilidade** de quem escreve, especialmente em temas de saúde e direito, que mexem com a vida das pessoas. Uma página "Sobre" completa, com registro verificável, é um dos sinais mais fortes de confiança. E, nos três conselhos, a identificação com registro é exigência ética.

**Como corrigir:** crie ou complete a página com: nome, profissão, registro, formação (graduação e especializações, com instituição), tempo de atuação, como você trabalha, endereço e links dos seus perfis. Coloque nome e registro no rodapé do site.

## Erro 18: Sem perguntas frequentes

**Como identificar:** suas páginas de serviço têm uma seção de perguntas e respostas? Existe uma página "Dúvidas frequentes"?

**Por que importa:** as IAs respondem perguntas. Se o seu site já tem a pergunta do paciente com uma resposta curta e clara, você entregou pronto o trecho que a IA precisa. É um dos formatos mais citados.

**Como corrigir:** em cada página de serviço, acrescente de 4 a 8 perguntas reais, com respostas de 2 a 4 frases. Pra levantar as perguntas:

```prompt Levantar perguntas frequentes
Liste as 10 dúvidas mais comuns de quem está pensando em fazer [serviço] com um(a) [profissão] no Brasil, escritas do jeito que um leigo perguntaria. Não inclua perguntas sobre preço. Para cada uma, escreva uma resposta de 2 a 3 frases, em linguagem simples, sem prometer resultados e respeitando as regras de publicidade do [CFO/CFP/OAB].
```

> Sempre revise as respostas geradas por IA antes de publicar: confira os fatos e ajuste ao seu jeito de atender.

## Erro 19: Links quebrados

**Como identificar**

- No Screaming Frog: aba **Response Codes**, filtro **Client Error (4xx)**. Pra ver **onde** está o link quebrado, clique na linha e abra a aba **Inlinks**, embaixo.
- No Search Console: **Indexação → Páginas**, motivo **"Não encontrado (404)"**.
- Sem ferramentas: clique em todos os links do menu, do rodapé e dos botões de cada página.

Casos comuns: link pro Instagram antigo, botão de WhatsApp com número desatualizado, página de serviço que foi apagada mas continua no menu, link pra um artigo que mudou de endereço.

**Por que importa:** link quebrado é sinal de site abandonado, tanto pro visitante quanto pro Google. E um botão de agendamento quebrado é paciente perdido.

**Como corrigir**

- Link interno quebrado: corrija o link pra página certa ou remova.
- Página que mudou de endereço: crie um **redirecionamento 301** do endereço antigo pro novo (WordPress: plugin gratuito **Redirection**. Wix: **Configurações → SEO → Gerenciador de URLs**).
- **Teste o botão de WhatsApp e o telefone** no celular. Esse teste merece ser feito uma vez por mês.

## Erro 20: Bots de IA bloqueados

**Como identificar:** abra `seudominio.com.br/robots.txt` e procure por estes nomes:

| Nome no robots.txt | De quem é |
|---|---|
| `GPTBot`, `OAI-SearchBot`, `ChatGPT-User` | OpenAI (ChatGPT) |
| `Google-Extended` | Google (uso em IA, como o Gemini) |
| `PerplexityBot` | Perplexity |
| `ClaudeBot`, `Claude-SearchBot` | Anthropic (Claude) |
| `CCBot` | Common Crawl (base usada por várias IAs) |

Se algum deles aparece seguido de `Disallow: /`, aquela IA está **proibida** de ler seu site. Alguns plugins de segurança e alguns serviços de hospedagem ou CDN (como o Cloudflare) adicionam esse bloqueio automaticamente, sem você saber. No Cloudflare, confira também se a opção de **bloqueio de bots de IA** está ativada no painel.

**Por que importa:** se a IA não pode ler seu site, ela vai falar de você só com base no que **outros** sites dizem, ou não vai falar nada. Pra quem quer ser recomendado por IA, esse bloqueio anula todo o resto.

> **Uma ressalva honesta:** liberar esses robôs significa permitir que o seu conteúdo seja lido e usado pelas IAs. Pra quem quer ser recomendado, faz sentido liberar. Mas a decisão é sua: se você tem conteúdo que não quer ver reproduzido, pode bloquear só pastas específicas.

**Como corrigir:** remova as linhas que bloqueiam esses robôs, ou deixe-os explicitamente liberados:

```copiar Trecho do robots.txt liberando os robôs de IA
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /
```

## Checklist do capítulo

- [ ] Erro 16: testei a página inicial no validator.schema.org
- [ ] Erro 16: instalei o schema do negócio e validei com zero erros
- [ ] Erro 17: a página "Sobre" tem nome, formação, registro e foto, e o registro está no rodapé
- [ ] Erro 18: as páginas de serviço têm perguntas frequentes reais
- [ ] Erro 19: rodei a checagem de links quebrados e testei WhatsApp e telefone no celular
- [ ] Erro 20: conferi o robots.txt (e o Cloudflare, se uso) e os robôs de IA não estão bloqueados
- [ ] Anotei na planilha cada erro encontrado, com as páginas afetadas
