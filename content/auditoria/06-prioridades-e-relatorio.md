# Tabela de impacto × esforço e relatório pro webdesigner

Você terminou o diagnóstico. Agora, a parte que transforma a lista de problemas em resultado: **decidir o que fazer primeiro** e **delegar com clareza** o que não dá pra fazer sozinho.

## A matriz impacto × esforço

Cada erro tem um **impacto** (quanto ele atrapalha sua visibilidade) e um **esforço** (quanto trabalho dá pra corrigir). Cruzando os dois, você tem quatro grupos:

| | **Esforço baixo** | **Esforço alto** |
|---|---|---|
| **Impacto alto** | 🟢 **FAÇA HOJE.** Ganho rápido | 🟡 **PLANEJE.** Vale o investimento |
| **Impacto baixo** | 🔵 **QUANDO SOBRAR TEMPO.** Rápido, mas muda pouco | ⚪ **DEIXE PRA DEPOIS.** Ou nem faça |

## Classificação dos 20 erros

Esta é a classificação típica pra um site de consultório ou escritório. Ajuste se o seu caso for diferente: por exemplo, se o seu site inteiro está com "noindex", o erro 2 é a prioridade absoluta.

| Nº | Erro | Impacto | Esforço | Grupo |
|---|---|---|---|---|
| 2 | Páginas marcadas como "noindex" | Alto | Baixo | 🟢 Faça hoje |
| 3 | robots.txt bloqueando o Google | Alto | Baixo | 🟢 Faça hoje |
| 20 | Bots de IA bloqueados | Alto | Baixo | 🟢 Faça hoje |
| 1 | Páginas fora do Google | Alto | Baixo | 🟢 Faça hoje |
| 4 | Sitemap ausente ou não enviado | Médio | Baixo | 🟢 Faça hoje |
| 15 | Nome, endereço e telefone inconsistentes | Alto | Baixo | 🟢 Faça hoje |
| 11 | Títulos e descrições ruins | Alto | Baixo | 🟢 Faça hoje |
| 17 | Sem página Sobre com registro | Alto | Baixo | 🟢 Faça hoje |
| 19 | Links quebrados | Médio | Baixo | 🟢 Faça hoje |
| 8 | Pop-ups cobrindo a tela | Médio | Baixo | 🟢 Faça hoje |
| 12 | H1 ausente ou repetido | Médio | Baixo | 🔵 Quando sobrar tempo |
| 7 | Imagens pesadas e sem descrição | Médio | Médio | 🟡 Planeje |
| 16 | Sem schema | Alto | Médio | 🟡 Planeje |
| 18 | Sem perguntas frequentes | Alto | Médio | 🟡 Planeje |
| 14 | Sem uma página por serviço | Alto | Alto | 🟡 Planeje |
| 13 | Páginas rasas | Alto | Alto | 🟡 Planeje |
| 5 | Versões duplicadas do site | Médio | Médio | 🟡 Planeje (geralmente webdesigner) |
| 6 | Nota baixa no PageSpeed | Médio | Alto | 🟡 Planeje |
| 9 | Texto pequeno e botões difíceis | Médio | Médio | 🔵 Quando sobrar tempo |
| 10 | Layout quebrado no celular | Médio a alto | Médio | 🟡 Planeje (geralmente webdesigner) |

## Seu plano de correção em 3 etapas

1. **Hoje à tarde (o resto do dia da auditoria):** corrija todos os 🟢 que você mesmo consegue.
2. **Nas próximas 2 semanas:** os 🟡 de conteúdo (páginas por serviço, FAQ, páginas rasas) são com você. Use uma ou duas horas por dia.
3. **Hoje mesmo, em paralelo:** mande o relatório abaixo pro webdesigner com os 🟡 técnicos (velocidade, duplicidade, layout, schema, se você não for instalar).

## Relatório pronto pro webdesigner

Copie, preencha só os erros que você **encontrou** e apague os outros. Inclua prints sempre que puder: eles economizam dias de troca de mensagem.

```copiar Relatório de auditoria para o webdesigner
Olá, [nome do webdesigner],

Fiz uma auditoria de SEO no site [endereço do site] e encontrei os pontos abaixo. Peço que você corrija os itens marcados como "Webdesigner". Os itens "Eu" eu mesmo(a) estou resolvendo.

PRIORIDADE ALTA
[ ] Erro 5: versões duplicadas. Hoje [descreva, ex.: "http://www... abre sem redirecionar"]. Preciso de redirecionamento 301 de todas as variações para https://[versão oficial]. Responsável: Webdesigner
[ ] Erro 10: layout quebrado no celular nas páginas [lista]. Prints em anexo. Responsável: Webdesigner
[ ] Erro 16: instalar o schema JSON-LD (código em anexo) no <head> da página inicial e validar em validator.schema.org com zero erros. Responsável: [Eu/Webdesigner]

PRIORIDADE MÉDIA
[ ] Erro 6: nota de [X] no PageSpeed (celular). Principais oportunidades apontadas: [copie do PageSpeed]. Responsável: Webdesigner
[ ] Erro 7: comprimir imagens acima de 300 KB e servir em WebP. Responsável: [Eu/Webdesigner]
[ ] Erro 9: aumentar texto do corpo para no mínimo 16 px no celular e área de toque dos botões para 48 px. Responsável: Webdesigner
[ ] Erro 12: definir um único H1 por página nas páginas [lista]. Responsável: [Eu/Webdesigner]

CONFIRMAÇÕES QUE PRECISO
[ ] O robots.txt não bloqueia o site nem os robôs GPTBot, Google-Extended, PerplexityBot e ClaudeBot (e, se usarmos Cloudflare, o bloqueio de bots de IA está desligado).
[ ] O sitemap está ativo em [endereço] e enviado no Search Console.
[ ] O certificado SSL está ativo e renova automaticamente.

Prazo desejado: [data].
Depois das correções, vou rodar de novo o PageSpeed e o validador de schema pra conferir. Obrigado(a)!
```

## Prompt pra transformar sua planilha em plano

Se você preencheu a planilha da auditoria, use este prompt pra montar o cronograma:

```prompt Plano de correção a partir da auditoria
Fiz uma auditoria de SEO no site do meu consultório/escritório. Esta é minha planilha com os erros encontrados:
[cole as linhas da planilha]
Tenho cerca de [X] horas por semana e [mexo sozinho(a) no site / dependo de um webdesigner]. A plataforma é [WordPress / Wix / outra].
Monte um cronograma semanal de correção para as próximas 3 semanas, começando pelos itens de maior impacto e menor esforço. Para cada item: o que fazer, onde, tempo estimado e se é comigo ou com o webdesigner.
Seja prático. Não invente funcionalidades da minha plataforma: se não tiver certeza de onde fica uma opção, diga isso.
```

## Quando refazer a auditoria

| Situação | Refaça |
|---|---|
| Rotina | A cada 6 meses |
| Depois de trocar de tema, de construtor ou de hospedagem | Na mesma semana |
| Depois de uma reformulação grande do site | Antes de publicar (num endereço de teste, se possível) e logo depois |
| Se as visitas do Google caírem de repente | Imediatamente. Comece pelos erros 1, 2, 3 e 20 |

## Checklist do capítulo

- [ ] Classifiquei os erros que encontrei na matriz impacto × esforço
- [ ] Corrigi hoje todos os itens 🟢 que dependem só de mim
- [ ] Preenchi o relatório com os itens que vão pro webdesigner
- [ ] Anexei prints e enviei o relatório
- [ ] Coloquei na agenda os itens 🟡 de conteúdo das próximas 2 semanas
- [ ] Agendei a próxima auditoria para daqui a 6 meses
