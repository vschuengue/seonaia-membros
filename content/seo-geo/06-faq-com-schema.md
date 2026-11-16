# FAQ com schema: o código que as máquinas entendem

Este capítulo tem duas partes. A primeira é **editorial**: como escolher e escrever perguntas frequentes que as IAs adoram citar. A segunda é **técnica**, mas com modelos prontos: como instalar o **schema**, um código invisível pro visitante que descreve você em linguagem de máquina.

Você não precisa entender programação. Precisa copiar, trocar os dados entre colchetes e colar no lugar certo. Ao final do capítulo há um passo a passo pra WordPress e pra Wix.

## Parte 1: Perguntas frequentes que viram resposta de IA

As IAs funcionam respondendo perguntas. Se o seu site já tem a pergunta e uma boa resposta, você facilitou o trabalho dela. Por isso o FAQ é um dos formatos mais eficientes de GEO.

### De onde tirar as perguntas certas

1. **Do seu dia a dia.** O que os pacientes ou clientes perguntam no WhatsApp, na recepção ou na primeira consulta? Essas são as melhores, porque são reais.
2. **Do próprio Google.** Busque o serviço + cidade e olhe a caixa "As pessoas também perguntam". Anote as que fazem sentido pra você.
3. **Das IAs.** Use o prompt abaixo.

```prompt Levantar perguntas reais
Liste as 15 dúvidas mais comuns que pacientes/clientes têm antes de contratar [serviço] com um(a) [profissão] no Brasil.
Agrupe em: (a) dúvidas sobre o que é e se é para mim, (b) dúvidas sobre como funciona e quanto tempo leva, (c) dúvidas práticas (agendamento, online/presencial, documentos, convênio), (d) medos e objeções.
Escreva cada pergunta do jeito que uma pessoa leiga perguntaria, em primeira pessoa quando fizer sentido. Não inclua perguntas sobre preço.
```

> **Por que sem preço:** perguntas sobre valor levam a respostas sobre preço, e anunciar preço é vedado ou restrito nos três conselhos (capítulo 3). Se alguém perguntar, a resposta no site pode ser "o valor depende da avaliação individual; entre em contato para agendar".

### Como escrever a resposta

| Regra | Exemplo |
|---|---|
| Responda na **primeira frase** | "Sim, a terapia online tem a mesma validade da presencial..." |
| 2 a 4 frases no total | Mais que isso vira artigo, e o artigo é outra página |
| Linguagem de paciente, não de congresso | "Dói?" em vez de "Há desconforto álgico no pós-operatório?" |
| Sem prometer resultado | "Na maioria dos casos..." em vez de "Sempre..." |
| Feche com um próximo passo quando couber | "Na primeira consulta avaliamos o seu caso." |

### Onde colocar o FAQ

- **Em cada página de serviço**: 4 a 8 perguntas sobre aquele serviço (bloco 7 do modelo do capítulo 5).
- **Numa página geral "Dúvidas frequentes"**: perguntas que valem pra todos os serviços (agendamento, convênios, online, localização).

## Parte 2: O schema

### O que é, em uma frase

Schema (ou "dados estruturados") é um bloco de código no formato **JSON-LD** que fica escondido na página e diz às máquinas, com precisão: "este é um dentista, o nome é tal, o registro é tal, o endereço é tal, e estas são as perguntas frequentes".

### Uma expectativa honesta

Desde 2023, o Google **mostra os FAQs "expandidos" no resultado da busca só para alguns sites** de governo e de saúde com muita autoridade. Ou seja: talvez você não veja as perguntas aparecendo abertas no Google. **Isso não torna o schema inútil.** Ele continua ajudando o Google e as IAs a **entender** quem você é e do que trata cada página, que é justamente o objetivo do GEO.

### Os três blocos de schema que você vai usar

| Bloco | Onde colocar | Pra quê |
|---|---|---|
| **Negócio + profissional** | Na página inicial (ou em todas as páginas) | Diz quem você é, o que faz e onde atende |
| **FAQ** | Em cada página que tem perguntas frequentes | Liga cada pergunta à resposta |
| **Serviço** (opcional) | Em cada página de serviço | Descreve aquele serviço específico |

### Modelo 1A: Dentista

```copiar Schema: Dentista (página inicial)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "[Nome da clínica ou seu nome profissional]",
  "url": "https://[seudominio.com.br]",
  "image": "https://[seudominio.com.br]/[foto-da-fachada-ou-consultorio].jpg",
  "telephone": "+55-[DDD]-[número]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Rua, número, sala]",
    "addressLocality": "[Cidade]",
    "addressRegion": "[UF]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "openingHours": ["Mo-Fr 08:00-18:00"],
  "areaServed": "[Cidade]",
  "knowsAbout": ["[Especialidade 1]", "[Especialidade 2]", "[Especialidade 3]"],
  "employee": {
    "@type": "Person",
    "name": "[Seu nome profissional]",
    "jobTitle": "Cirurgiã(o)-dentista",
    "identifier": "CRO-[UF] [número]",
    "sameAs": [
      "https://www.instagram.com/[perfil]",
      "https://www.linkedin.com/in/[perfil]"
    ]
  },
  "sameAs": [
    "https://www.instagram.com/[perfil-da-clinica]",
    "https://[link-do-perfil-no-google-maps]"
  ]
}
</script>
```

### Modelo 1B: Psicólogo(a)

O schema não tem um tipo específico "psicólogo". O mais adequado é usar `MedicalBusiness` pro consultório e `Person` pra você.

```copiar Schema: Psicólogo(a) (página inicial)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "[Seu nome profissional] · Psicologia",
  "url": "https://[seudominio.com.br]",
  "image": "https://[seudominio.com.br]/[sua-foto-profissional].jpg",
  "telephone": "+55-[DDD]-[número]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Rua, número, sala]",
    "addressLocality": "[Cidade]",
    "addressRegion": "[UF]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "areaServed": ["[Cidade]", "Brasil (atendimento online)"],
  "knowsAbout": ["[Tema 1, ex.: ansiedade]", "[Tema 2]", "[Abordagem, ex.: Terapia Cognitivo-Comportamental]"],
  "founder": {
    "@type": "Person",
    "name": "[Seu nome profissional]",
    "jobTitle": "Psicóloga(o)",
    "identifier": "CRP [região]/[número]",
    "sameAs": [
      "https://www.instagram.com/[perfil]",
      "https://www.linkedin.com/in/[perfil]"
    ]
  }
}
</script>
```

### Modelo 1C: Advogado(a) ou escritório

```copiar Schema: Advocacia (página inicial)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "[Nome do escritório ou seu nome] Advocacia",
  "url": "https://[seudominio.com.br]",
  "image": "https://[seudominio.com.br]/[foto-do-escritorio].jpg",
  "telephone": "+55-[DDD]-[número]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Rua, número, sala]",
    "addressLocality": "[Cidade]",
    "addressRegion": "[UF]",
    "postalCode": "[CEP]",
    "addressCountry": "BR"
  },
  "areaServed": "[Cidade/Estado]",
  "knowsAbout": ["Direito [área 1]", "Direito [área 2]"],
  "employee": {
    "@type": "Person",
    "name": "[Seu nome]",
    "jobTitle": "Advogada(o)",
    "identifier": "OAB/[UF] [número]",
    "sameAs": [
      "https://www.linkedin.com/in/[perfil]",
      "https://www.jusbrasil.com.br/[perfil]"
    ]
  }
}
</script>
```

> **Sobre o `sameAs`:** é a lista de perfis seus em outros sites. É o jeito mais direto de dizer à IA "o Instagram X, o LinkedIn Y e este site são da mesma pessoa". Inclua só perfis que são realmente seus e que estão ativos.

### Modelo 2: FAQ (vale pras três profissões)

Use as **mesmas perguntas e respostas que aparecem visíveis na página**. Colocar no schema perguntas que não estão no texto é contra as regras do Google.

```copiar Schema: Perguntas frequentes
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pergunta 1, igual à da página]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Resposta 1, igual à da página]" }
    },
    {
      "@type": "Question",
      "name": "[Pergunta 2]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Resposta 2]" }
    },
    {
      "@type": "Question",
      "name": "[Pergunta 3]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Resposta 3]" }
    }
  ]
}
</script>
```

### Modelo 3: Serviço (opcional, uma por página de serviço)

```copiar Schema: Serviço
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Serviço] em [Cidade]",
  "serviceType": "[Serviço]",
  "description": "[O mesmo primeiro parágrafo da página: o que é e pra quem é]",
  "areaServed": "[Cidade]",
  "provider": {
    "@type": "Person",
    "name": "[Seu nome profissional]",
    "identifier": "[CRO/CRP/OAB e número]"
  },
  "url": "https://[seudominio.com.br]/[endereco-da-pagina]"
}
</script>
```

### Prompt pra gerar o schema preenchido

Em vez de preencher à mão, você pode passar seus dados pra IA e pedir o código pronto. **Valide sempre** depois (passo a seguir).

```prompt Gerar schema preenchido
Gere um bloco de schema JSON-LD (dentro de <script type="application/ld+json">) do tipo [Dentist / MedicalBusiness / LegalService] com estes dados reais:
- Nome: [ ]
- Profissional responsável: [nome], [cargo], registro [CRO/CRP/OAB nº]
- Site: [ ]
- Telefone: [ ]
- Endereço completo com CEP: [ ]
- Horário: [ ]
- Especialidades/áreas: [ ]
- Perfis (sameAs): [links]
Depois gere um segundo bloco do tipo FAQPage com estas perguntas e respostas, sem mudar o texto: [cole as perguntas e respostas].
Use apenas propriedades válidas do schema.org. Não invente dados: se faltar algum, omita a propriedade.
```

### Como validar

1. Acesse **validator.schema.org**, cole o código (ou o endereço da página já publicada) e clique em executar. O objetivo é **zero erros**. Avisos (warnings) são aceitáveis.
2. Acesse **search.google.com/test/rich-results** e teste o endereço da página publicada, pra ver se o Google lê os dados.

### Como instalar no WordPress

1. Instale o plugin gratuito **WPCode** (Plugins → Adicionar novo → busque "WPCode").
2. Pro schema do negócio (página inicial): em **Code Snippets → Header & Footer**, cole o código no campo **Header** e salve. Ele passa a valer pro site todo, o que está correto pra esse bloco.
3. Pro FAQ e o serviço: edite a página do serviço e, no editor de blocos, adicione um bloco **"HTML personalizado"** no fim da página com o código. Ou use o recurso de snippet por página do WPCode.
4. Se você usa **Yoast** ou **Rank Math**, eles já geram parte do schema. Mantenha o deles e acrescente o seu FAQ. Se aparecerem **dois blocos do mesmo tipo** no validador, remova um.

### Como instalar no Wix

1. Abra o editor, vá na página desejada e clique em **Configurações da página → SEO avançado → Marcação de dados estruturados**.
2. Clique em **Adicionar nova marcação**, cole **só o conteúdo entre as chaves** (sem as linhas `<script>` e `</script>`) e salve.
3. Repita pra cada página com FAQ ou serviço.
4. Publique o site e valide.

> **Outras plataformas:** procure por "código no cabeçalho", "custom code" ou "dados estruturados" nas configurações. Se não encontrar, mande os blocos pro seu webdesigner com a instrução "inserir no `<head>` da página X".

## Checklist do capítulo

- [ ] Levantei pelo menos 15 perguntas reais dos meus pacientes ou clientes
- [ ] Escrevi de 4 a 8 perguntas e respostas pra cada página de serviço
- [ ] Criei (ou atualizei) a página geral de dúvidas frequentes
- [ ] Preenchi e instalei o schema do negócio + profissional na página inicial
- [ ] Instalei o schema de FAQ em cada página que tem perguntas frequentes
- [ ] Validei todos os blocos no validator.schema.org com zero erros
- [ ] Testei a página publicada no teste de resultados avançados do Google
