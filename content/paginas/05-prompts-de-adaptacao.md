# Prompts de adaptação: cidade, especialidade e tom de voz

Os textos dos capítulos anteriores são uma base sólida, mas **o texto que funciona melhor é o que parece seu**. Estes prompts fazem em minutos a personalização que levaria horas, e resolvem o problema do texto duplicado explicado no capítulo 1.

**Como usar:** copie o prompt, cole no ChatGPT, no Gemini ou no Claude, preencha os campos e cole o texto do modelo onde indicado. Depois **revise sempre**: a IA pode errar fatos ou exagerar no tom.

## Prompt 1: Personalizar uma página inteira

O mais importante. Use em cada página antes de publicar.

```prompt Personalizar página com meus dados e meu jeito
Vou te passar um modelo de página para o site de um(a) [dentista / psicólogo(a) / advogado(a)]. Reescreva o texto para que ele fique com a minha cara, mantendo exatamente a mesma estrutura de títulos e seções.

Meus dados reais:
- Nome profissional e registro: [ ]
- Cidade e bairro: [ ]
- Formação: [ ]
- Anos de atuação: [ ]
- O que me diferencia de verdade (sem superlativos): [ex.: atendo muitas famílias com crianças pequenas; tenho experiência em hospital; atendo em inglês]
- Meu jeito de falar com pacientes/clientes: [ex.: acolhedor e informal / sério e técnico / direto e prático]
- Um exemplo real do meu dia a dia (sem identificar ninguém): [ ]

Regras:
1. Reescreva com palavras diferentes pelo menos 40% do texto, principalmente o primeiro parágrafo e a seção "Por que fazer comigo".
2. Mantenha o primeiro parágrafo com 2 a 3 frases dizendo o que é, para quem é, quem faz e onde.
3. Respeite as regras de publicidade do [CFO / CFP / OAB]: sem promessa de resultado, sem preço, sem "o melhor", sem comparação com colegas, sem captação.
4. Não invente dados sobre mim. Onde faltar informação, escreva [PREENCHER].
5. Linguagem simples, frases curtas.

MODELO:
[cole aqui o texto do modelo]
```

## Prompt 2: Adaptar para outra cidade ou bairro

Útil se você atende em mais de um endereço ou quer uma página pra cidade vizinha.

```prompt Adaptar página para outra localidade
Adapte a página abaixo para o atendimento em [nova cidade ou bairro], onde atendo [endereço / dias da semana / online].
Ajuste o título, o primeiro parágrafo, a seção "Como agendar" e acrescente uma frase natural sobre a região (referências de acesso, bairros próximos atendidos), sem inventar fatos sobre a cidade.
Não copie frases inteiras da versão original: reescreva o suficiente para que as duas páginas não fiquem parecidas demais.
Mantenha as regras de publicidade do [CFO / CFP / OAB].

PÁGINA ORIGINAL:
[cole aqui]
```

> **Atenção:** só crie páginas por cidade se você realmente atende lá (presencialmente ou online, deixando isso claro). Páginas de cidades onde você não atende confundem o paciente e são vistas como manipulação pelo Google.

## Prompt 3: Criar uma especialidade que não está no pacote

Os modelos cobrem 5 especialidades por profissão. Este prompt cria a sua, com a mesma estrutura.

```prompt Nova página de especialidade
Crie uma página de site sobre [nova especialidade/serviço, ex.: "harmonização orofacial", "orientação vocacional", "direito imobiliário"] para [meu nome], [profissão] ([registro]), que atende em [cidade].
Siga exatamente esta estrutura:
- Título SEO (até 60 caracteres) e meta descrição (até 155 caracteres)
- # [Serviço] em [Cidade]
- Primeiro parágrafo: o que é, para quem é indicado, quem faz e onde (2 a 3 frases)
- ## Para quem é indicado (4 a 6 itens concretos)
- ## Como funciona (3 a 6 etapas numeradas)
- ## Quanto tempo leva e o que esperar (sem prometer resultado)
- ## Por que fazer com [meu nome] (com [PREENCHER] onde faltar dado)
- ## Perguntas frequentes (4 perguntas com respostas de 2 a 4 frases, sem preço)
- Linha final: nome, profissão, registro e "Atualizado em [mês/ano]"
Respeite as regras de publicidade do [CFO / CFP / OAB]. Se o serviço tiver alguma restrição ética ou exigir título específico no conselho, me avise antes do texto.
Não invente informações técnicas: se não tiver certeza de algo, sinalize para eu conferir.
```

## Prompt 4: Ajustar o tom de voz

```prompt Mudar o tom do texto
Reescreva o texto abaixo com um tom [mais acolhedor e próximo / mais sóbrio e profissional / mais direto e objetivo], mantendo todas as informações, a estrutura de títulos e as regras de publicidade do [CFO / CFP / OAB].
Use frases curtas e linguagem que uma pessoa sem formação na área entenda. Não acrescente promessas nem superlativos.

TEXTO:
[cole aqui]
```

## Prompt 5: Criar perguntas frequentes novas

```prompt Mais perguntas frequentes
Sou [profissão] em [cidade] e atendo [público]. Estas são perguntas que meus pacientes/clientes já me fizeram de verdade:
[liste 3 a 10 perguntas reais]
Transforme cada uma numa pergunta e resposta para o FAQ do meu site: pergunta escrita como o leigo perguntaria, resposta de 2 a 4 frases, começando pela resposta direta.
Depois, sugira mais 5 perguntas parecidas que provavelmente também aparecem.
Sem preços, sem promessas de resultado, respeitando as regras do [CFO / CFP / OAB].
```

## Prompt 6: Revisão final antes de publicar

Rode este prompt em **toda** página, depois de personalizar.

```prompt Revisão final da página
Revise a página abaixo, que será publicada no site de um(a) [profissão]. Verifique e liste:
1. Campos não preenchidos (qualquer coisa entre colchetes).
2. Trechos que possam violar as regras de publicidade do [CFO / CFP / OAB]: promessa de resultado, preço ou desconto, superlativos, comparação com colegas, captação, sensacionalismo, exposição de paciente/cliente.
3. Informações técnicas ou legais que eu deveria conferir antes de publicar.
4. Se o primeiro parágrafo responde, em até 3 frases, o que é, para quem é, quem faz e onde.
5. Se o título SEO tem até 60 caracteres e a meta descrição até 155.
Para cada problema, sugira a correção. No final, diga: "Pronto para publicar", "Publicar com ajustes" ou "Reescrever".

PÁGINA:
[cole aqui]
```

## Checklist do capítulo

- [ ] Rodei o Prompt 1 em cada página antes de publicar
- [ ] Criei páginas extras de especialidade com o Prompt 3, se precisei
- [ ] Ajustei o tom com o Prompt 4 onde o texto não parecia meu
- [ ] Acrescentei perguntas reais dos meus pacientes ou clientes com o Prompt 5
- [ ] Rodei a revisão final (Prompt 6) em todas as páginas
- [ ] Conferi pessoalmente todas as informações técnicas e legais antes de publicar
