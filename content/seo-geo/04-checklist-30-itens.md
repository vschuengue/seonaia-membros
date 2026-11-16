# O checklist SEO+GEO de 30 itens

Este é o coração técnico do guia. São 30 itens, divididos em quatro blocos, pensados especificamente pra site de consultório, clínica e escritório. Você não precisa ser técnico: cada item diz **o que conferir** e **como resolver**, em linguagem simples.

Marque cada item conforme resolver. O progresso fica salvo, então você pode fazer em partes ao longo dos 7 dias (o capítulo 7 diz exatamente em qual dia fazer cada bloco).

> **Se o seu site foi feito por outra pessoa:** leia o item, marque os que você mesmo consegue resolver no painel e mande o resto pro seu webdesigner. O Guia de Auditoria (se você levou junto) tem um modelo de relatório pronto pra isso.

## Bloco 1: Base técnica (8 itens)

Sem essa base, nada do que você escrever vai ser lido direito, nem pelo Google, nem pelas IAs.

- [ ] **1. O site abre com cadeado (https).** Digite o endereço sem "https" e veja se ele redireciona sozinho pra versão com cadeado. Se não, peça pra hospedagem ativar o certificado SSL (quase sempre é gratuito).
- [ ] **2. O site está no Google.** Busque `site:seudominio.com.br` no Google. Se não aparecer nenhuma página, o site não está indexado. Cadastre no Google Search Console (passo a passo no capítulo 7, Dia 1).
- [ ] **3. Existe uma única versão do site.** Teste `www.seudominio.com.br` e `seudominio.com.br`: os dois devem levar pro mesmo endereço final. Duas versões dividem a força do site.
- [ ] **4. O site funciona bem no celular.** Abra no seu celular: o texto deve ser legível sem zoom, os botões clicáveis e nada pode "vazar" pra fora da tela. Mais de 70% das buscas por profissionais vêm do celular.
- [ ] **5. O site carrega em menos de 3 segundos.** Teste em **pagespeed.web.dev**. Nota abaixo de 50 no celular quase sempre é imagem pesada: reduza as imagens antes de subir (o site squoosh.app faz isso de graça).
- [ ] **6. O site não bloqueia o Google nem as IAs.** Abra `seudominio.com.br/robots.txt`. Se aparecer `Disallow: /` sozinho, o site inteiro está bloqueado. Procure também linhas que bloqueiem `GPTBot`, `Google-Extended`, `PerplexityBot` ou `ClaudeBot`: se existirem, as IAs não conseguem ler seu site.
- [ ] **7. Existe um sitemap.** Abra `seudominio.com.br/sitemap.xml` (ou `/sitemap_index.xml` no WordPress). Se existir, envie no Search Console. No WordPress, plugins como Yoast ou Rank Math criam o sitemap automaticamente.
- [ ] **8. Não há páginas quebradas no menu.** Clique em cada item do menu e do rodapé. Página de erro ("404") no menu passa sinal de site abandonado.

## Bloco 2: Entidade e presença local (8 itens)

Aqui você garante que o Google e as IAs **entendam, sem dúvida, quem você é, o que faz e onde atende**. É o bloco com maior impacto em GEO.

- [ ] **9. Nome, endereço e telefone idênticos em todo lugar.** Escolha um formato único (ex.: "Clínica Sorriso Centro · Rua X, 123, Sala 4 · Centro · Campinas/SP · (19) 99999-9999") e use exatamente igual no site, no Perfil da Empresa, nas redes sociais e nos diretórios.
- [ ] **10. Perfil da Empresa no Google criado e verificado.** Em **business.google.com**. Se já existe, confira se a propriedade é sua e se os dados batem com o item 9.
- [ ] **11. Categoria certa no Perfil da Empresa.** A categoria principal deve ser a mais específica possível ("Ortodontista" em vez de só "Dentista"; "Advogado trabalhista" em vez de só "Advogado"). Adicione categorias secundárias pras outras especialidades.
- [ ] **12. Perfil da Empresa completo.** Horário, fotos reais da fachada e do consultório, descrição, serviços, link do site e atributos (acessibilidade, atendimento online). Perfis completos aparecem mais.
- [ ] **13. Nome profissional e registro no rodapé do site.** Conforme o capítulo 3. Além de exigência ética, é um dos sinais mais fortes de que você é uma pessoa real e habilitada.
- [ ] **14. Página "Sobre" com credenciais reais.** Formação, especializações, registro, tempo de atuação, foto profissional. O capítulo 5 tem a estrutura dessa página.
- [ ] **15. Presença consistente em 3 a 5 diretórios relevantes.** Exemplos: Doctoralia (saúde), JusBrasil (advocacia), páginas do seu conselho, associações de especialidade, e o seu LinkedIn. Mesmos dados do item 9.
- [ ] **16. Perfis antigos corrigidos ou removidos.** Aqueles erros que você anotou no teste do capítulo 2 (endereço antigo, telefone desativado): corrija na fonte ou peça remoção.

## Bloco 3: Autoridade e confiança (7 itens)

As IAs preferem citar fontes que parecem confiáveis. Estes itens mostram que você é uma.

- [ ] **17. Cada texto educativo tem autor identificado.** No fim de artigos e páginas de serviço: "Texto escrito por [Nome], [profissão], [registro]". Isso liga o conteúdo à sua credencial.
- [ ] **18. Data de atualização visível nos conteúdos.** "Atualizado em [mês/ano]". IAs e Google preferem informação recente.
- [ ] **19. Links pra fontes oficiais quando citar regras ou dados.** Conselho, ministério, legislação, sociedades científicas. Linkar boas fontes aumenta sua credibilidade.
- [ ] **20. Avaliações reais no Perfil da Empresa.** Peça avaliação a pacientes ou clientes satisfeitos, **sem oferecer nada em troca** e respeitando as regras do seu conselho. Responda todas, inclusive as negativas, com sobriedade e sem expor ninguém.
- [ ] **21. Menção em pelo menos 1 site de terceiros por trimestre.** Entrevista a um portal local, artigo como convidado, participação em podcast, palestra divulgada por uma associação. Ser citado por outros é o que mais pesa pras IAs te recomendarem.
- [ ] **22. Redes sociais apontando pro site.** Link do site na bio do Instagram, no LinkedIn e no Perfil da Empresa. Isso ajuda a "amarrar" sua identidade.
- [ ] **23. Política de privacidade publicada.** Exigência da LGPD se você coleta dados por formulário, e um sinal de site profissional.

## Bloco 4: Conteúdo que a IA consegue ler (7 itens)

Os capítulos 5, 6 e 7 detalham cada um destes. Aqui é pra você ter a lista completa.

- [ ] **24. Uma página para cada serviço ou especialidade.** Nada de uma página única "Serviços" com uma lista. Cada serviço importante merece a sua página (capítulo 5).
- [ ] **25. Título de cada página com serviço + cidade.** Exemplo: "Implante Dentário em Campinas · Dra. Ana Souza". Esse título aparece na aba do navegador e no Google.
- [ ] **26. Primeiro parágrafo responde "o que é e pra quem é".** Em 2 a 3 frases, sem enrolação. É esse trecho que a IA tende a usar na resposta.
- [ ] **27. Perguntas frequentes reais em cada página de serviço.** De 4 a 8 perguntas que seus pacientes ou clientes de fato fazem (capítulo 6).
- [ ] **28. Dados estruturados (schema) instalados.** O código que descreve você pra máquinas: tipo de profissional, endereço, especialidades, FAQ (capítulo 6).
- [ ] **29. Imagens com descrição (texto alternativo).** Toda foto deve ter um "texto alternativo" descrevendo o que mostra ("Consultório da Dra. Ana Souza, em Campinas"). No WordPress fica no campo "Texto alternativo" da imagem.
- [ ] **30. Pelo menos 1 conteúdo novo por mês.** Artigo, nova pergunta no FAQ ou atualização de página. O plano de 90 dias do capítulo 7 resolve isso pra você.

## Como priorizar se o tempo for curto

Se você só tiver tempo pra uma parte esta semana, faça nesta ordem:

| Prioridade | Itens | Por quê |
|---|---|---|
| 1ª | 1, 2, 6, 9, 10, 13 | Sem eles, o resto não funciona ou não é lido |
| 2ª | 11, 12, 14, 24, 25, 26 | Maior impacto em aparecer no mapa e nas respostas das IAs |
| 3ª | 27, 28, 15, 16 | Consolidam a entidade e dão material pra IA citar |
| 4ª | Todos os demais | Fortalecem com o tempo |

## Prompt pra transformar o checklist em lista de tarefas

```prompt Plano de correção a partir do checklist
Sou [profissão] em [cidade] e estou otimizando meu site [endereço] para Google e IAs.
Abaixo está a lista dos itens do meu checklist SEO+GEO que ainda NÃO estão resolvidos:
[cole os números e títulos dos itens não marcados]
Minha plataforma de site é [WordPress / Wix / outra / não sei] e eu [mexo sozinho(a) no site / dependo de um webdesigner].
Monte uma lista de tarefas em ordem de prioridade. Para cada tarefa: o que fazer, onde clicar (se for na minha plataforma), tempo estimado e se dá pra eu fazer sozinho(a) ou se preciso de ajuda técnica.
Seja específico e prático. Se não souber como algo funciona na minha plataforma, diga isso em vez de inventar.
```
